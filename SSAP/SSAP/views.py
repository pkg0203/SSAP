from rest_framework.views import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from django.db.models import Count
from articles.models import Article
from stories.models import Story
from articles.serializers import ArticleSerializer
from stories.serializers import StorySerializer

ARTICLE_TO_GET = 5
STORY_TO_GET = 5


class MainPageListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class_Article = ArticleSerializer
    serializer_class_Story = StorySerializer

    def get_queryset_Article(self):
        return Article.objects.annotate(
            count=Count("article_marks"), like=Count("article_likes")
        ).order_by("-count", "-like", "-created_at")[:ARTICLE_TO_GET]

    def get_queryset_Story(self):
        return Story.objects.annotate(
            count=Count("story_marks"), like=Count("story_likes")
        ).order_by("-count", "-like", "-created_at")[:STORY_TO_GET]

    def list(self, request, *args, **kwargs):
        article = self.serializer_class_Article(self.get_queryset_Article(), many=True)
        story = self.serializer_class_Story(self.get_queryset_Story(), many=True)
        return Response({"Articles": article.data, "Stories": story.data})