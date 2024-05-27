from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from .models import Event
from .serializers import EventViewSerializer, EventCreateSerializer
from .permissions import IsAdminOrReadOnly
import datetime
from accounts.models import User


class EventAPIView(APIView):
    # 이번 달에 속한 이벤트만 가져오도록
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request):
        self.check_permissions(request)
        now = datetime.datetime.now()
        events = Event.objects.filter(start_at__lte=now, end_at__gte=now)
        serializer = EventViewSerializer(events, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        self.check_permissions(request)
        serializer = EventCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=HTTP_201_CREATED)


class EventDetailAPIView(APIView):
    permission_classes=[IsAdminUser]
    def get_event(self, pk):
        return get_object_or_404(Event, pk=pk)

    def delete(self, request, pk):
        event = self.get_event(pk)
        event.delete()
        message = f"event pk : {pk} has been successfully deleted"
        return Response({message}, status=HTTP_200_OK)

    def put(self, request, pk):
        event = self.get_event(pk)
        serializer = EventCreateSerializer(event, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
