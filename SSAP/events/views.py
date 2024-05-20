from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from .models import Event
from .serializers import EventViewSerializer, EventCreateSerializer
import datetime
from accounts.models import User


# Create your views here.
class EventAPIView(APIView):
    # 이번 달에 속한 이벤트만 가져오도록
    def get(self, request):
        # if request.user.is_authenticated:
        now = datetime.datetime.now()
        events = Event.objects.filter(start_at__lte=now, end_at__gte=now)
        serializer = EventViewSerializer(events, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        # if request.user.is_superuser:
        serializer = EventCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # 아직 로그인 구현 전
            serializer.save(user=User.objects.filter(pk=11)[0])
            # serializer.save(user=request.user)
            return Response(serializer.data, status=HTTP_201_CREATED)


class EventDetailAPIView(APIView):
    def delete(self, request, pk):
        # if request.user.is)superuser:
        event = get_object_or_404(Event, pk=pk)
        event.delete()
        message = f"event pk : {pk} has been successfully deleted"
        return Response({message}, status=HTTP_200_OK)
