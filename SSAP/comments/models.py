from django.db import models
from django.conf import settings
from articles.models import *
from stories.models import *

# Create your models here.
class Article_Comment(models.Model):
    article = models.ForeignKey(
        Article,
        on_delete=models.CASCADE,
        related_name="comments"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="article_comments",
    )
    content = models.TextField()
    comment_at = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Story_Comment(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    comment_at = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
