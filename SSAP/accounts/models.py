from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from articles.models import Article
from stories.models import Story


# 헬퍼 클래스
class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)


# AbstractBaseUser를 상속해서 유저 커스텀
class User(AbstractBaseUser):
    email = models.EmailField(unique=True, max_length=255)
    username = models.CharField(max_length=30, unique=True, null=False, blank=False)
    Nation_Choices = [
        ("Afghanistan", "Afghanistan"),
        ("Albania", "Albania"),
        ("Algeria", "Algeria"),
        ("Argentina", "Argentina"),
        ("Armenia", "Armenia"),
        ("Australia", "Australia"),
        ("Austria", "Austria"),
        ("Azerbaijan", "Azerbaijan"),
        ("Bangladesh", "Bangladesh"),
        ("Belarus", "Belarus"),
        ("Belgium", "Belgium"),
        ("Belize", "Belize"),
        ("Bolivia", "Bolivia"),
        ("Brazil", "Brazil"),
        ("Bulgaria", "Bulgaria"),
        ("Cambodia", "Cambodia"),
        ("Canada", "Canada"),
        ("Chile", "Chile"),
        ("China", "China"),
        ("Colombia", "Colombia"),
        ("Croatia", "Croatia"),
        ("Egypt", "Egypt"),
        ("Estonia", "Estonia"),
        ("Finland", "Finland"),
        ("France", "France"),
        ("Georgia", "Georgia"),
        ("Germany", "Germany"),
        ("Ghana", "Ghana"),
        ("Greece", "Greece"),
        ("Hungary", "Hungary"),
        ("Iceland", "Iceland"),
        ("India", "India"),
        ("Indonesia", "Indonesia"),
        ("Iran", "Iran"),
        ("Iraq", "Iraq"),
        ("Israel", "Israel"),
        ("Italy", "Italy"),
        ("Jamaica", "Jamaica"),
        ("Japan", "Japan"),
        ("Jordan", "Jordan"),
        ("Kazakhstan", "Kazakhstan"),
        ("USA", "USA"),
        # ... 이게 맞나?..
    ]
    nation = models.CharField(choices=Nation_Choices, max_length=30)
    like_article = models.ManyToManyField(
        Article, related_name="liked", symmetrical=False
    )
    bookmark_article = models.ManyToManyField(
        Article, related_name="bookmarked", symmetrical=False
    )
    like_story = models.ManyToManyField(Story, related_name="liked", symmetrical=False)
    bookmark_story = models.ManyToManyField(
        Story, related_name="bookmarked", symmetrical=False
    )
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser
