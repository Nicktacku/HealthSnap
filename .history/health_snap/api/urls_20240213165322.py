from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('symptom/', views.symptom_checker, name="symptom"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("register/", views.register),
]