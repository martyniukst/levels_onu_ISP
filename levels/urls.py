from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.olt_list, name='olt_list'),
    path('all_levels/', views.all_levels, name='all_levels'),
    path('olt_list_diff/', views.olt_list_diff, name='olt_list_diff'),
    path("<str:olt>/", views.levels_by_olt, name='levels_olt'),

]
