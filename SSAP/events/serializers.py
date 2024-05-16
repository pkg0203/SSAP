from rest_framework import serializers
from .models import Event

class EventViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"