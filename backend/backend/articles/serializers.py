from .models import Article
from rest_framework.serializers import ModelSerializer


class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article

        fields = (
            'author',
            'body_text',
            'location',
            'pub_date',
            'quote',
            'title',
        )
