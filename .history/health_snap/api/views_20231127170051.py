from django.shortcuts import HttpResponse

def home(requests):
    return HttpResponse("Hello world")
