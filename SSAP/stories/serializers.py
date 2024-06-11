from rest_framework import serializers
from .models import Story, StoryLike, StoryBookmark
from datetime import datetime, timedelta, timezone
from comments.serializers import StoryCommentSerializer


class StorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Story
        fields = "__all__"
        read_only_fields = ["user","img"]


class StoryDetailSerializer(StorySerializer):
    story_comments = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    class Meta:
        model = Story
        fields = '__all__'
    def get_story_comments(self, obj):
        comments = obj.story_comments.filter(comment_at__isnull=True)
        return StoryCommentSerializer(comments, many=True).data
    
    def get_username(self,obj):
        return obj.user.username