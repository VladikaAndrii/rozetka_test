from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User
from rest_framework.exceptions import AuthenticationFailed


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email",
                  "password",)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserSigninSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(min_length=8, max_length=68, write_only=True)
    refresh_token = serializers.CharField(read_only=True)
    access_token = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ["email", "password", "refresh_token", "access_token"]

    def validate(self, data):
        user = authenticate(**data)
        if not user:
            raise AuthenticationFailed("Invalid credentials, try again")
        if not user.is_verified:
            raise AuthenticationFailed("Email is not verified")
        if user and user.is_active:
            return {"email": user.email,
                    "refresh_token": user.refresh_token(),
                    "access_token": user.access_token()}
        raise serializers.ValidationError("Incorrect data")


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ["token"]
