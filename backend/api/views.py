from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
import datetime
import time
from .models import UserAccount, SubscriptionOrder, QuizSubmission, ContactInquiry, NewsletterSubscriber
from .db_mongo import sync_to_mongo

ADMIN_PASSCODE = 'aliabbas1234578!'

@api_view(['POST'])
def register_user(request):
    data = request.data
    username = data.get('username', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()
    company = data.get('company', '').strip()

    if not email or not password:
        return Response({'success': False, 'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    if not username:
        username = email.split('@')[0]

    user = UserAccount.objects.filter(email=email).first()
    if user:
        return Response({'success': False, 'message': 'Account already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.create(
        username=username,
        email=email,
        password=password,
        company=company,
        is_paid=False,
        active_plan='Free Tier'
    )
    
    sync_to_mongo('users', {
        'username': username,
        'email': email,
        'company': company,
        'is_paid': False,
        'active_plan': 'Free Tier',
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': 'Account created successfully!',
        'user': {'id': user.id, 'username': user.username, 'email': user.email}
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()

    if not email or not password:
        return Response({'success': False, 'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.filter(email=email).first()
    if not user or user.password != password:
        return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    return Response({
        'success': True,
        'message': 'Sign in successful!',
        'user': {'id': user.id, 'username': user.username, 'email': user.email, 'is_paid': user.is_subscription_active()}
    })

@api_view(['POST'])
def subscribe_plan(request):
    data = request.data
    plan_name = data.get('plan_name', 'Professional Home Analyzer Kit')
    amount = data.get('amount', 150)
    email = data.get('email', '').strip().lower()
    cardholder_name = data.get('cardholder_name', 'Subscriber')

    order = SubscriptionOrder.objects.create(
        plan_name=plan_name,
        amount=amount,
        email=email,
        cardholder_name=cardholder_name,
        stripe_payment_id=f"sub_sim_{int(time.time())}"
    )

    user = UserAccount.objects.filter(email=email).first()
    if user:
        user.is_paid = True
        user.active_plan = plan_name
        user.paid_until = timezone.now() + datetime.timedelta(days=30)
        user.save()

    sync_to_mongo('subscriptions', {
        'order_id': order.id,
        'plan_name': plan_name,
        'amount': float(amount),
        'email': email,
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': f'Subscription activated for {plan_name}!',
        'order_id': order.id
    })

@api_view(['POST'])
def quiz_submit(request):
    data = request.data
    sub = QuizSubmission.objects.create(
        email=data.get('email', ''),
        primary_goal=data.get('primary_goal', ''),
        symptoms=data.get('symptoms', ''),
        recommended_panel=data.get('recommended_panel', 'Full-Spectrum Longevity Panel')
    )
    sync_to_mongo('quizzes', {'id': sub.id, 'primary_goal': sub.primary_goal, 'created_at': time.time()})
    return Response({'success': True, 'message': 'Quiz response recorded.'})

@api_view(['POST'])
def contact_submit(request):
    data = request.data
    inquiry = ContactInquiry.objects.create(
        name=data.get('name', ''),
        email=data.get('email', ''),
        subject=data.get('subject', ''),
        message=data.get('message', '')
    )
    sync_to_mongo('inquiries', {'id': inquiry.id, 'email': inquiry.email, 'created_at': time.time()})
    return Response({'success': True, 'message': 'Inquiry submitted.'})

@api_view(['POST'])
def newsletter_submit(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    if email:
        NewsletterSubscriber.objects.get_or_create(email=email)
        sync_to_mongo('newsletters', {'email': email, 'created_at': time.time()})
    return Response({'success': True, 'message': 'Subscribed to SiPhBioHome newsletter.'})

@api_view(['GET'])
def admin_analytics(request):
    passcode = request.headers.get('X-Admin-Passcode', '')
    if passcode != ADMIN_PASSCODE:
        return Response({'success': False, 'message': 'Forbidden'}, status=status.HTTP_403_FORBIDDEN)

    return Response({
        'success': True,
        'analytics': {
            'total_users': UserAccount.objects.count(),
            'total_subscribers': SubscriptionOrder.objects.count(),
            'total_quizzes': QuizSubmission.objects.count(),
            'total_inquiries': ContactInquiry.objects.count(),
        }
    })
