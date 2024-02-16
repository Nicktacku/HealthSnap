from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.home, name="home"),
    path('symptom/', views.symptom_checker, name="symptom"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("register/", views.register),
    path("users/", views.getUsers),
    path("records/", views.getRecords),
    path("records/give", views.giveRecord),
    path("feedbacks/", views.getFeedbacks),
    path("feedbacks/give", views.giveFeedback),
]