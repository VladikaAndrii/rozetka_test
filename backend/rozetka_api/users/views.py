from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import jwt
from django.conf import settings

from .serializers import UserSigninSerializer, UserSignupSerializer, EmailVerificationSerializer, UserSerializer
from .models import User
from .utils import Mailer


class SignupView(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSignupSerializer

    def post(self, request, *args, **kwargs):
        user = request.data
        serializer = self.get_serializer(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        # TODO Change variable name below
        user = User.objects.get(email=user_data["email"])
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request).domain
        relative_link = reverse("email-verify")
        # TODO Move code below to def.
        absurl = "http://" + current_site + relative_link + "?token=" + str(token)
        email_body = "Hi!" + " Use link below to verify your email! \n" + absurl
        data = {"email_body": email_body, "email_to": user.email, "email_subject": "Verify your email"}

        Mailer.send_confirmation_email_to_user(data)
        data_response = {"email": user_data["email"],
                         "success": True}
        return Response(data_response, status=HTTP_201_CREATED)

    @staticmethod
    def

class VerifyEmail(APIView):
    serializer_class = EmailVerificationSerializer
    token_param_config = openapi.Parameter("token", in_=openapi.IN_QUERY,
                                           description="Description", type=openapi.TYPE_STRING)

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get("token")
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            user = User.objects.get(id=payload["user_id"])
            if not user.is_verified:
                user.is_verified = True
                user.save()
            return Response({"email": "Email successful activated",
                             "success": True}, status=HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return Response({"email": "Activation Expired"}, status=HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return Response({"email": "Invalid token"}, status=HTTP_400_BAD_REQUEST)


class SignInView(CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSigninSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=HTTP_200_OK)


class LogoutView(CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        request.user.access_token = None
        data = {"status": "User successfully logged out"}
        return Response(data, status=HTTP_200_OK)
