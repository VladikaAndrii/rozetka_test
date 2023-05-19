from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


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
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect data")
