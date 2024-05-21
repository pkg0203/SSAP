from rest_framework import serializers
from .models import Article, ArticleLike, ArticleBookmark
from datetime import datetime, timedelta, timezone


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = "__all__"


class ArticleDetailSerializer(ArticleSerializer):
    class Meta:
        model = Article
        fields = "__all__"
