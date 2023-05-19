from rest_framework import permissions
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse

from .serializers import UserSerializer, UserSigninSerializer, UserSignupSerializer
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

        absurl = "http://"+current_site+relative_link+"?token=" + str(token)
        email_body = "Hi!" + " Use link below to verify your email! \n" + absurl
        data = {"email_body": email_body, "email_to": user.email, "email_subject": "Verify your email"}

        Mailer.send_email(data)
        return Response(user_data, status=HTTP_201_CREATED)

        # token, created = Token.objects.get_or_create(user=user)
        # return Response({
        #     'user': UserSerializer(user, context=self.get_serializer_context()).data,
        #     'token': token.key,
        # }, status=HTTP_201_CREATED)


class VerifyEmail(GenericAPIView):
    def get(self):
        pass



class SignInView(CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSigninSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token.key,
        }, status=HTTP_200_OK)


class LogoutView(CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return Response(status=HTTP_200_OK)
