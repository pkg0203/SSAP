from .models import Article_Comment, Story_Comment
from rest_framework import serializers
from django.contrib.auth import get_user_model 


class ArticleCommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    class Meta:
        model = Article_Comment
        fields = "__all__"
        read_only_fields = ("user", "article")

    def get_replies(self, obj):
        if obj.comment_at is None:
            replies = Article_Comment.objects.filter(comment_at=obj)
            return ArticleCommentSerializer(replies, many=True).data
        return None

    def get_username(self,obj):
        return obj.user.username

class ArticleCommentGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article_Comment
        fields = "__all__"
        read_only_fields = ("user", "article")


class StoryCommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    class Meta:
        model = Story_Comment
        fields = "__all__"
        read_only_fields = ("user", "story")

    def get_replies(self, obj):
        if obj.comment_at is None:
            replies = Story_Comment.objects.filter(comment_at=obj)
            return StoryCommentSerializer(replies, many=True).data
        return None
    
    def get_username(self,obj):
        return obj.user.username


class StoryCommentGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Story_Comment
        fields = "__all__"
        read_only_fields = ("user", "story")
