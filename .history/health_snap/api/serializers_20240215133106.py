from rest_framework.serializers import ModelSerializer
from .models import Record, Feedback

from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["password", "first_name", "last_name", "email"]
        
class RecordSerializer(ModelSerializer):
    class Meta:
        model = Record
        fields = "__all__"