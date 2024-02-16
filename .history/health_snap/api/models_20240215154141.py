from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Information(models.Model):
    phone_number = models.CharField(max_length=50)
    birthday = models.DateField()

class Record(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    patient_name = models.CharField(max_length=200)
    patient_notes = models.TextField()

    def __str__(self):
        return self.patient_name

class Feedback(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    stars = models.IntegerField(blank=False, null=False)
    feedback = models.TextField()

    def __str__(self):
        return str(self.user_id)
