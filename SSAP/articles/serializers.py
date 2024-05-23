from rest_framework import serializers
from .models import Article, ArticleLike, ArticleBookmark
from comments.models import Article_Comment
from comments.serializers import ArticleCommentSerializer


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = "__all__"


class ArticleDetailSerializer(ArticleSerializer):
    comments = ArticleCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = ["title", "img", "content", "created_at", "updated_at", "comments"]
