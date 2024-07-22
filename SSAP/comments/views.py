from django.http import Http404
from django.shortcuts import get_object_or_404, redirect, render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from articles.models import Article
from stories.models import Story

from .models import Article_Comment, Story_Comment
from .serializers import ArticleCommentSerializer, StoryCommentSerializer


# Comment on Article
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
        if request.user == comment.user:
            serializer = ArticleCommentSerializer(
                comment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response(
            {"error": "작성자만 수정할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )

    def delete(self, request, pk):
        comment = get_object_or_404(Article_Comment, pk=pk)
        if request.user == comment.user:
            comment.delete()
            return Response(
                {"message": "댓글이 삭제되었습니다"}, status=status.HTTP_200_OK
            )
        return Response(
            {"error": "작성자만 삭제할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )


# ReComment on Article Comment
class ArticleReCommentAPIView(APIView):
    def post(self, request, comment_pk):
        parent_comment = get_object_or_404(Article_Comment, pk=comment_pk)
        serializer = ArticleCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                user=request.user,
                article=parent_comment.article,
                comment_at=parent_comment,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_pk):
        recomment = get_object_or_404(Article_Comment, pk=comment_pk)
        if request.user == recomment.user:
            serializer = ArticleCommentSerializer(
                recomment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response(
            {"error": "작성자만 수정할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )

    def delete(self, request, comment_pk):
        recomment = get_object_or_404(Article_Comment, pk=comment_pk)
        if request.user == recomment.user:
            recomment.delete()
            return Response(
                {"message": "대댓글이 삭제되었습니다"}, status=status.HTTP_200_OK
            )
        return Response(
            {"error": "작성자만 삭제할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )


# Comment on Story
class StoryCommentAPIView(APIView):
    def post(self, request, pk):
        serializer = StoryCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, story=get_object_or_404(Story, pk=pk))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        comment_pk = pk
        comment = get_object_or_404(Story_Comment, pk=comment_pk)
        if comment.user == request.user:
            serializer = StoryCommentSerializer(
                comment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response(
            {"error": "작성자만 수정할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )

    def delete(self, request, pk):
        comment_pk = pk
        comment = get_object_or_404(Story_Comment, pk=comment_pk)
        if request.user == comment.user:
            comment.delete()
            return Response(
                {"message": "댓글이 삭제되었습니다"}, status=status.HTTP_200_OK
            )
        return Response(
            {"error": "작성자만 삭제할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )


# ReComment on Story Comment
class StoryReCommentAPIView(APIView):
    def post(self, request, comment_pk):
        parent_comment = get_object_or_404(Story_Comment, pk=comment_pk)
        serializer = StoryCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                user=request.user,
                story=parent_comment.story,
                comment_at=parent_comment,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, comment_pk):
        recomment = get_object_or_404(Story_Comment, pk=comment_pk)
        if request.user == recomment.user:
            serializer = StoryCommentSerializer(
                recomment, data=request.data, partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response(
            {"error": "작성자만 수정할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )

    def delete(self, request, comment_pk):
        recomment = get_object_or_404(Story_Comment, pk=comment_pk)
        if request.user == recomment.user:
            recomment.delete()
            return Response(
                {"message": "대댓글이 삭제되었습니다"}, status=status.HTTP_200_OK
            )
        return Response(
            {"error": "작성자만 삭제할 수 있습니다."},
            status=status.HTTP_403_FORBIDDEN,
        )
