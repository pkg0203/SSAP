import requests
from django.contrib.auth import authenticate
from django.urls import reverse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import (TokenObtainPairSerializer,
                                                  TokenRefreshSerializer)
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegistrationSerializer,PasswordChangeSerializer


class RegistrationAPIView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            data = {
                "email": serializer.data["email"],
                "password": serializer.data["password"],
            }
            return requests.post(reverse("login"), data)


class LoginAPIView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(request, email=email, password=password)

        if user:
            refresh = TokenObtainPairSerializer.get_token(user)
            access = str(refresh.access_token)
            message = {"access": access, "username": user.username}
            return Response(message, status=status.HTTP_200_OK)
        return Response(
            {"Invalid about Email or Password"}, status=status.HTTP_400_BAD_REQUEST
        )


class LogoutAPIView(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            token = RefreshToken.for_user(request.user)
            token.blacklist()
            message = {"message": "Success"}
            return Response(message, status=status.HTTP_200_OK)
        return Response(
            {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
        )

class PasswordAPIView(APIView):
    def patch(self, request):
        user = request.user
        serializer = PasswordChangeSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
