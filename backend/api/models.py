from django.db import models
from django.utils import timezone

class UserAccount(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    company = models.CharField(max_length=255, blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    active_plan = models.CharField(max_length=100, default='Free Tier')
    paid_until = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} ({self.active_plan})"

    def is_subscription_active(self):
        if self.is_paid and self.paid_until and self.paid_until > timezone.now():
            return True
        return False

class SubscriptionOrder(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True, blank=True)
    plan_name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    email = models.EmailField()
    cardholder_name = models.CharField(max_length=255)
    stripe_payment_id = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=50, default='active')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} - {self.plan_name} ({self.email})"

class QuizSubmission(models.Model):
    email = models.EmailField(blank=True, null=True)
    primary_goal = models.CharField(max_length=255)
    symptoms = models.TextField(blank=True, null=True)
    recommended_panel = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

class ContactInquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
