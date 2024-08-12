from rest_framework import serializers

from comments.models import Article_Comment
from comments.serializers import ArticleCommentSerializer

from .models import Article, ArticleBookmark, ArticleLike


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = "__all__"
        read_only_fields = ["director", "img"]


class ArticleDetailSerializer(ArticleSerializer):
    article_comments = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = "__all__"

    def get_article_comments(self, obj):
        comments = obj.article_comments.filter(comment_at__isnull=True)
        return ArticleCommentSerializer(comments, many=True).data
