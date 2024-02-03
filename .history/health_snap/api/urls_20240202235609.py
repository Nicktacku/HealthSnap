from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('symptom/', views.symptom_checker, name="symptom")
]