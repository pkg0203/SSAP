from rest_framework import serializers
from .models import Story, StoryLike, StoryBookmark
from datetime import datetime, timedelta, timezone


class StorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Story
        fields = "__all__"


class StoryDetailSerializer(StorySerializer):
    class Meta:
        model = Story
        fields = "__all__"
