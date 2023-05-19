from django.urls import path
from .views import SignupView, SignInView, LogoutView

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("signin/", SignInView.as_view(), name="signin"),
    path("logout/", LogoutView.as_view(), name="logout")
]