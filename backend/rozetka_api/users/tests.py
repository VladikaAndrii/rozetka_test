from django.test import TestCase
from rest_framework.authtoken.models import Token
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase
from rest_framework import status

from users.models import User


# Create your tests here.
class SignupTestCase(APITestCase):
    def test_signup_user(self):
        data = {"email": "andrii@ukr.net",
                "first_name": "Andrii",
                "last_name": "Vladika",
                "password": "test_password"}
        response = self.client.post(reverse("signup"), data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class LoginTestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(email="andrii@ukr.net",
                                             password="test_password")

    def test_login(self):
        data = {
            "email": "andrii@ukr.net",
            "password": "test_password"
        }
        response = self.client.post(reverse("signin"), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class LogoutTestCase(APITestCase):
    def setUp(self):
        email = "andrii@ukr.net"
        password = "test_password"
        self.user = User.objects.create_user(email=email,
                                             password=password)
        self.token = Token.objects.create(user=self.user)

    def test_logout(self):
        self.token = Token.objects.get(user__email="andrii@ukr.net")
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token.key)
        self.client.login(email="andrii@ukr.net",
                          password="test_password")
        response = self.client.post(reverse("logout"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(Token.objects.filter(key=self.token.key).exists())
