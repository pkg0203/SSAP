from django.shortcuts import render, redirect, get_object_or_404
from .models import Article_Comment, Story_Comment
from articles.models import Article
from stories.models import Story
from .serializers import ArticleCommentSerializer, StoryCommentSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import Http404


# APIView - Comment on Article
class ArticleCommentAPIView(APIView):
    def post(self, request, pk):
        serializer = ArticleCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                user=request.user, article=get_object_or_404(Article, pk=pk)
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        comment = get_object_or_404(Article_Comment, pk=pk)
        serializer = ArticleCommentSerializer(comment, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        comment = get_object_or_404(Article_Comment, pk=pk)
        comment.delete()
        data = {"댓글이 삭제되었습니다."}
        return Response(data, status=status.HTTP_200_OK)


# APIView - ReComment on Article Comment
class ArticleReCommentAPIView(APIView):
    def post(self, request, comment_at_pk):
        serializer = ArticleCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                user=request.user,
                article_comment=get_object_or_404(Article_Comment, pk=comment_at_pk),
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_at_pk):
        recomment = get_object_or_404(Article_Comment, pk=comment_at_pk)
        if request.user == recomment.author:
            serializer = ArticleCommentSerializer(
                recomment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response({"권한이 없습니다."})

    def delete(self, request, comment_at_pk):
        recomment = get_object_or_404(Article_Comment, pk=comment_at_pk)
        if request.user == recomment.author:
            recomment.delete()
            return Response({"대댓글이 삭제되었습니다"}, status=status.HTTP_200_OK)
        return Response({"권한이 없습니다."})


# APIView - Comment on Story
class StoryCommentAPIView(APIView):
    def post(self, request, pk, comment_at_pk):
        serializer = StoryCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, pk=pk, comment_pk=comment_at_pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_pk):
        comment = get_object_or_404(Story_Comment, pk=comment_pk)
        serializer = StoryCommentSerializer(comment, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, comment_pk):
        comment = get_object_or_404(Story_Comment, pk=comment_pk)
        comment.delete()
        data = {"댓글이 삭제되었습니다."}
        return Response(data, status=status.HTTP_200_OK)


# APIView - ReComment on Story Comment
class StoryReCommentAPIView(APIView):
    def post(self, request, comment_at_pk):
        serializer = StoryCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                user=request.user,
                article_comment=get_object_or_404(Story_Comment, pk=comment_at_pk),
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_at_pk):
        recomment = get_object_or_404(Story_Comment, pk=comment_at_pk)
        if request.user == recomment.author:
            serializer = StoryCommentSerializer(
                recomment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response({"권한이 없습니다."})

    def delete(self, request, comment_at_pk):
        recomment = get_object_or_404(Story_Comment, pk=comment_at_pk)
        if request.user == recomment.author:
            recomment.delete()
            return Response({"대댓글이 삭제되었습니다"})
        return Response({"권한이 없습니다."})
