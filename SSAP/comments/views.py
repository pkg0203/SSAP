from django.shortcuts import render, redirect, get_object_or_404
from .models import Article_Comment
from articles.models import Article
from stories.models import Story
from .serializers import *
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import Http404


# APIView - Comment on Article
class ArticleCommentAPIView(APIView):
    def get(self, request, pk):
        article = get_object_or_404(Article, pk=pk)
        comment_at = int(request.GET.get("comment_at", "0"))
        if comment_at == 0:
            all_comments = Article_Comment.objects.filter(
                pk=pk, comment_at__isnull=True
            ).select_related("user")

        else:
            all_comments = Article_Comment.objects.filter(
                pk=pk, comment_at=comment_at
            ).select_related("user")
        comments = all_comments
        serializer = ArticleCommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        if request.user.is_authenticated:
            article = get_object_or_404(Article, pk=pk)
            serializer = ArticleCommentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_pk):
        if request.user.is_authenticated:
            comment = get_object_or_404(Article_Comment, pk=comment_pk)
            serializer = ArticleCommentSerializer(
                comment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)

    def delete(self, request, comment_pk):
        if request.user.is_authenticated:
            comment = get_object_or_404(Article_Comment, pk=comment_pk)
            comment.delete()
            data = {"댓글이 삭제되었습니다."}
            return Response(data, status=status.HTTP_200_OK)


# APIView - Comment on Story
class StoryCommentAPIView(APIView):
    def get(self, request, pk):
        story = get_object_or_404(Story, pk=pk)
        comment_at = int(request.GET.get("comment_at", "0"))
        if comment_at == 0:
            all_comments = Story_Comment.objects.filter(
                pk=pk, comment_at__isnull=True
            ).select_related("user")

        else:
            all_comments = Story_Comment.objects.filter(
                pk=pk, comment_at=comment_at
            ).select_related("user")
        comments = all_comments
        serializer = StoryCommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        if request.user.is_authenticated:
            story = get_object_or_404(Story, pk=pk)
            serializer = StoryCommentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_pk):
        if request.user.is_authenticated:
            comment = get_object_or_404(Story_Comment, pk=comment_pk)
            serializer = StoryCommentSerializer(
                comment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)

    def delete(self, request, comment_pk):
        if request.user.is_authenticated:
            comment = get_object_or_404(Story_Comment, pk=comment_pk)
            comment.delete()
            data = {"댓글이 삭제되었습니다."}
            return Response(data, status=status.HTTP_200_OK)
