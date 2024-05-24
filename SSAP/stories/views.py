from django.shortcuts import get_object_or_404

from .models import Story, StoryLike, StoryBookmark
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from .serializers import StorySerializer


class StoryListAPIView(APIView):
    def get(self, request):
        stories = Story.objects.all()
        serializer = StorySerializer(stories, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not request.user.is_authenticated:
            return Response(
                {"error": "로그인 후 이용해주세요."},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        serializer = StorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class StoryDetailAPIView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Story, pk=pk)

    def get(self, request, pk):
        story = self.get_object(pk)
        serializer = StorySerializer(story)
        return Response(serializer.data)

    def put(self, request, pk):
        if not request.user.is_authenticated:
            return Response(
                {"error": "로그인 후 이용해주세요."},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        story = self.get_object(pk)
        serializer = StorySerializer(story, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        if not request.user.is_authenticated:
            return Response(
                {"error": "로그인 후 이용해주세요."},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        story = self.get_object(pk)
        story.delete()
        data = {"pk": f"{pk} is deleted."}
        return Response(data, status=status.HTTP_200_OK)


class StoryLikeAPIView(APIView):

    def post(self, request, pk):
        story = get_object_or_404(Story, id=pk)
        story_like = StoryLike.objects.filter(user=request.user, story=story)
        if not story_like.exists():
            like = StoryLike(user=request.user, story=story)
            like.save()
            return Response("LIKE", status=201)
        else:
            story_like.first().delete()
            return Response("UNLIKE", status=201)


class StoryBookmarkAPIView(APIView):

    def post(self, request, pk):
        story = get_object_or_404(Story, id=pk)
        story_bookmark = StoryBookmark.objects.filter(user=request.user, story=story)
        if not story_bookmark.exists():
            mark = StoryBookmark(user=request.user, story=story)
            mark.save()
            return Response("MARK", status=201)
        else:
            story_bookmark.first().delete()
            return Response("NOTMARK", status=201)
