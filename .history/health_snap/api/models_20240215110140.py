from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Information(models.Model):
    phone_number = models.CharField(max_length=50)
    birthday = models.DateField()
    
class Record(models.Model):
    pass

class Feedback(models.Model):
    stars = models.IntegerField(blank=False, null=False)
    feedback = models.TextField()
