from rest_framework.serializers import ModelSerializer
from base.models import Note
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["password", "first_name", "last_name", "email"]