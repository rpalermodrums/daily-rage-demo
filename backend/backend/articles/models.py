from django.db import models


class Article(models.Model):
    author = models.CharField(max_length=200)
    body_text = models.TextField()
    location = models.CharField(max_length=100)
    pub_date = models.DateTimeField('date published')
    quote = models.CharField(max_length=200)
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title