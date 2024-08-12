from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    img = models.ImageField()
    email = models.EmailField(unique=True)
    intro = models.TextField(blank=True, null=True)
    nation = models.CharField(max_length=50)
    #
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "emial", "nation"]
