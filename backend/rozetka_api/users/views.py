from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .serializers import UserSerializer, UserSigninSerializer, UserSignupSerializer
from .models import User

class SignupView(generics.CreateAPIView):
	queryset = User.objects.all()
	permission_classes = (permissions.AllowAny,)
	serializer_class = UserSignupSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		token, created = Token.objects.get_or_create(user=user)
		return Response({
			'user': UserSerializer(user, context=self.get_serializer_context()).data,
			'token': token.key,
		})


class SignInView(generics.CreateAPIView):
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
		})