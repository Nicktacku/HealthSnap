from django.db import models

# Create your models here.
class Information(models.Model):
    phone_number = models.CharField(max_length=50)
    birthday = models.DateField()

class Symptom(models.Model):
    name = models.CharField(max_length=50)

class Sickness(models.Model):
    symptom_id = models.CharField(max_length=100)
    name = models.CharField(max_length=50)

class Feedback(models.Model):
    stars = models.IntegerField(blank=False, null=False)
    feedback = models.TextField()
