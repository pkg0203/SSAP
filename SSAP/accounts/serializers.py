from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import User


class RegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    intro = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ("username", "email", "nation", "password1", "password2", "intro")

    def validate(self, data):
        if data["password1"] == data["password2"]:
            return data
        raise serializers.ValidationError("password1 and password2 aren't matched")

    def create(self, validated_data):
        user = User(
            username=validated_data["username"],
            email=validated_data["email"],
            nation=validated_data["nation"],
            # intro가 없을 수도 있기 때문에 있으면 저장
            intro=validated_data.get("intro", None),
        )
        user.set_password(validated_data["password1"])
        user.save()
        return user
    

class PasswordChangeSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = (
            "password1",
            "password2",
        )

    def validate(self, data):
        password1 = data["password1"]
        password2 = data["password2"]
        # 두 비밀번호가 일치하는지 확인
        if password1 != password2:
            raise serializers.ValidationError("password1 and password2 aren't matched")
        user =  self.context['request'].user
        # 동일한 비밀번호로 변경하려는지 확인
        if user.check_password(password1):
            raise serializers.ValidationError("you can't change to same password")
        return data

    def update(self, instance, validated_data):
        instance.set_password(validated_data["password1"])
        instance.save()
        return instance
