from django.urls import path
from .views import SignupView, SignInView, LogoutView, VerifyEmail

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("email-verify/", VerifyEmail.as_view(), name="email-verify"),
    path("signin/", SignInView.as_view(), name="signin"),
    path("logout/", LogoutView.as_view(), name="logout")
]