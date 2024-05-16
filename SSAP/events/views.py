from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Event
from .serializers import EventViewSerializer


# Create your views here.
class EventAPIView(APIView):
    def get(self,request):
        #if request.user.is_authenticated:
        events = Event.objects.all()
        serializer = EventViewSerializer(events,many=True)
        return Response(serializer.data)
