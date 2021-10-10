from django.urls import path
from platzigram import views

urlpatterns = [
    path('hello/', views.hello_world),
    path('sort/', views.sort_numbers),
]
