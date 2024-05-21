from django.shortcuts import get_object_or_404
from .models import Article, ArticleLike, ArticleBookmark
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import ArticleSerializer


class ArticleListAPIView(APIView):
    def get(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not request.user.is_superuser:
            return Response(
                {"error": "관리자 권한이 필요합니다."},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class ArticleDetailAPIView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Article, pk=pk)

    def get(self, request, pk):
        article = self.get_object(pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    def put(self, request, pk):
        if not request.user.is_superuser:
            return Response(
                {"error": "관리자 권한이 필요합니다."},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        try:
            article = self.get_object(pk)
        except Article.DoesNotExist:
            return Response(
                {"error": "Article not found."},
                status=status.HTTP_404_NOT_FOUND,
            )
        serializer = ArticleSerializer(article, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        if not request.user.is_superuser:
            return Response(
                {"error": "관리자 권한이 필요합니다."},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        try:
            article = self.get_object(pk)
        except Article.DoesNotExist:
            return Response(
                {"error": "Article not found."},
                status=status.HTTP_404_NOT_FOUND,
            )
        article.delete()
        data = {"pk": f"{pk} is deleted."}
        return Response(data, status=status.HTTP_200_OK)


class ArticleLikeAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        article = get_object_or_404(Article, id=pk)
        article_like = ArticleLike.objects.filter(user=request.user, article=article)
        if not article_like.exists():
            like = ArticleLike(user=request.user, article=article)
            like.save()
            return Response("LIKE", status=201)
        else:
            article_like.first().delete()
            return Response("UNLIKE", status=201)


class ArticleBookmarkAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        article = get_object_or_404(Article, id=pk)
        article_bookmark = ArticleBookmark.objects.filter(
            user=request.user, article=article
        )
        if not article_bookmark.exists():
            mark = ArticleBookmark(user=request.user, article=article)
            mark.save()
            return Response("MARK", status=201)
        else:
            article_bookmark.first().delete()
            return Response("NOTMARK", status=201)
