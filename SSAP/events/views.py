from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from .models import Event
from .serializers import EventViewSerializer, EventCreateSerializer
import datetime
from accounts.models import User


class EventAPIView(APIView):
    # 이번 달에 속한 이벤트만 가져오도록
    def get(self, request):
        if request.user.is_authenticated:
            now = datetime.datetime.now()
            events = Event.objects.filter(start_at__lte=now, end_at__gte=now)
            serializer = EventViewSerializer(events, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
        else :
            return Response({'로그인이 필요합니다.'},status=HTTP_401_UNAUTHORIZED)

    def post(self, request):
        if request.user.is_superuser:
            serializer = EventCreateSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                # 아직 로그인 구현 전
                serializer.save(user=User.objects.filter(pk=11)[0])
                # serializer.save(user=request.user)
                return Response(serializer.data, status=HTTP_201_CREATED)
        else :
            return Response({'권한이 없습니다'},status=HTTP_401_UNAUTHORIZED)

class EventDetailAPIView(APIView):
    def get_event(self,pk):
        return get_object_or_404(Event, pk=pk)

    def delete(self, request, pk):
        if request.user.is_superuser:
            event = self.get_event(pk)
            event.delete()
            message = f"event pk : {pk} has been successfully deleted"
            return Response({message}, status=HTTP_200_OK)
        else :
            return Response({'권한이 없습니다'},status=HTTP_401_UNAUTHORIZED)
    
    def put(self,request,pk):
        if request.user.is_superuser:
            event = self.get_event(pk)
            serializer = EventCreateSerializer(event,data=request.data,partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        else :
            return Response({'권한이 없습니다'},status=HTTP_401_UNAUTHORIZED)