from rest_framework import serializers
from .models import Article, ArticleLike, ArticleBookmark
from comments.models import Article_Comment
from comments.serializers import ArticleCommentSerializer


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = "__all__"
        read_only_fields = ["director","img"]

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['img'] = instance.img.url
        print(ret)
        img_url = self.get_photo_url(instance)
        print(img_url)
        return ret
    
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.img.url
        return request.build_absolute_uri(photo_url)

class ArticleDetailSerializer(ArticleSerializer):
    article_comments = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = "__all__"
    def get_article_comments(self, obj):
        comments = obj.article_comments.filter(comment_at__isnull=True)
        return ArticleCommentSerializer(comments, many=True).data
    
    