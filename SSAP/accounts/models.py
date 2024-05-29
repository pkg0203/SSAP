from datetime import timezone
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, BaseUserManager
from . import choices
from articles.models import Article
from stories.models import Story


# 헬퍼 클래스
class UserManager(BaseUserManager):
    def create_user(self, username,email, password, **extra_fields):
        if not email:
            raise ValueError("The Email must be set")
        email = self.normalize_email(email)
        user = self.model(username=username,email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username,email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(username,email, password, **extra_fields)


class User(AbstractUser):
    #Nickname
    username = models.CharField(max_length=30, unique=True)
    #name = models.CharField(max_length=100)
    email = models.EmailField(_("email address"), unique=True)
    Nation_Choices = choices.nations
    
    nation = models.CharField(choices=Nation_Choices, max_length=30)
    intro = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email
