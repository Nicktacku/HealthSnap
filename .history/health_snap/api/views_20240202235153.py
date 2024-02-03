from rest_framework.decorators import api_view
from rest_framework.response import Response

from .nfa import Nfa

@api_view()
def home(request):
    return Response("Hello world")

@api_view()
def symptom_checker(request):
    
    
    return Response(request.data)
