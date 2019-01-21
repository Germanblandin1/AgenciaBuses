from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from Gestion import views

urlpatterns = [
    path('pasajeros/', views.PasajeroList.as_view()),
    path('pasajeros/<int:pk>/', views.PasajeroDetail.as_view()),
    path('choferes/', views.ChoferList.as_view()),
    path('choferes/<int:pk>/', views.ChoferDetail.as_view()),
    path('buses/', views.BusList.as_view()),
    path('buses/<int:pk>/', views.BusDetail.as_view()),
    path('horarios/', views.HorarioList.as_view()),
    path('horarios/<int:pk>/', views.HorarioDetail.as_view()),
    path('trayectos/', views.TrayectoList.as_view()),
    path('trayectos/<int:pk>/', views.TrayectoDetail.as_view()),
    path('viajes/', views.ViajeList.as_view()),
    path('viajes/<int:pk>/', views.ViajeDetail.as_view()),
    path('asignaciones/', views.AsignacionList.as_view()),
    path('asignaciones/<int:pk>/', views.AsignacionDetail.as_view()),
    path('listado/', views.listado),
    path('vendidos/<int:porcentaje>/trayectos/<int:id_trayecto>/', views.vendidos),
]

urlpatterns = format_suffix_patterns(urlpatterns)

