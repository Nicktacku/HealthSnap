from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=50)
    birthday = models.DateField()

class Account(models.Model):
    email = models.EmailField(max_length=250)
    
class Symptom(models.Model):
