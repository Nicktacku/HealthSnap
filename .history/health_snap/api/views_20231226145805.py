from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

@apid_view
def home(request):
    return Response("Hello world")
