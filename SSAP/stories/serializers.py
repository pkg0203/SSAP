from rest_framework import serializers
from .models import Story, StoryLike, StoryBookmark
from datetime import datetime, timedelta, timezone
from comments.serializers import StoryCommentSerializer


class StorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Story
        fields = "__all__"


class StoryDetailSerializer(StorySerializer):

    story_comments = StoryCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Story
        fields = [
            "title",
            "img",
            "content",
            "created_at",
            "updated_at",
            "story_comments",
        ]
