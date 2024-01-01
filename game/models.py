from django.db import models

# Create your models here.

class Score(models.Model):
    username = models.CharField(max_length=50)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.username} - {self.score}"