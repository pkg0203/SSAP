from .models import Article_Comment, Story_Comment
from rest_framework import serializers


class ArticleCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article_Comment
        fields = "__all__"


class StoryCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Story_Comment
        fields = "__all__"
