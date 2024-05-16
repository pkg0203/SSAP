from django.db import models
from django.contrib.auth.models import AbstractUser
from articles.models import Article
from stories.models import Story
# Create your models here.
class User(AbstractUser):
    Nation_Choices=[
        ("Canada", "Canada"),
        ("USA", "USA"),
        # ....
        ("France", "France"),
    ]
    nation = models.CharField(choices=Nation_Choices, max_length=100)
    like_article = models.ManyToManyField(
        Article, 
        related_name="liked", 
        symmetrical=False
    )
    bookmark_article = models.ManyToManyField(
        Article, 
        related_name="bookmarked", 
        symmetrical=False
    )
    like_story = models.ManyToManyField(
        Story, 
        related_name="liked", 
        symmetrical=False
    )
    bookmark_story = models.ManyToManyField(
        Story, 
        related_name="bookmarked", 
        symmetrical=False
    )
    created_at = models.DateTimeField(auto_now=True)
