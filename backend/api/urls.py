from django.urls import path
from . import views

urlpatterns = [
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),
    path('checkout/subscribe/', views.subscribe_plan, name='subscribe_plan'),
    path('quiz/submit/', views.quiz_submit, name='quiz_submit'),
    path('contact/', views.contact_submit, name='contact_submit'),
    path('newsletter/', views.newsletter_submit, name='newsletter_submit'),
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
