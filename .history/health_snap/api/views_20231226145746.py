from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

def home(request):
    return HttpResponse("Hello world")
