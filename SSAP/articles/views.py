from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Article, ArticleLike, ArticleBookmark
from .serializers import ArticleSerializer
from .permissions import IsAdminOrReadOnly


class ArticleListAPIView(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):    
        serializer = ArticleSerializer(data=request.data)
        self.check_object_permissions(self.request, serializer)
        if serializer.is_valid(raise_exception=True):
            serializer.save(director=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class ArticleDetailAPIView(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get_object(self, pk):
        article = get_object_or_404(Article, pk=pk)
        self.check_object_permissions(self.request, article)
        return article

    def get(self, request, pk):
        article = self.get_object(pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    def put(self, request, pk):
        article = self.get_object(pk)
        serializer = ArticleSerializer(article, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        article = self.get_object(pk)
        article.delete()
        data = {"pk": f"{pk} is deleted."}
        return Response(data, status=status.HTTP_200_OK)


class ArticleLikeAPIView(APIView):

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
