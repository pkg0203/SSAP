from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import get_user_model
from dj_rest_auth.registration.serializers import RegisterSerializer

class CustomTokenRefreshSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()

    def validate(self, attrs):
        refresh = RefreshToken(attrs['refresh_token'])
        data = {'access_token': str(refresh.access_token)}

        return data
    

class UserSerializer(RegisterSerializer):
    
    nation = serializers.CharField()