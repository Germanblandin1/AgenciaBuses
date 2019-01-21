from django.contrib.auth.models import User, Group
from rest_framework import serializers
from Gestion.models import *

class PasajeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pasajero
        fields = ('id', 'nombre')

class ChoferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chofer
        fields = ('id', 'nombre')

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ('id', 'nombre')

class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = ('id', 'dia','hora','minuto')

class TrayectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trayecto
        fields = ('id', 'origen','destino')

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = ('id', 'trayecto','horario','bus','chofer')

class AsignacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion
        fields = ('id', 'viaje','pasajero','npuesto')