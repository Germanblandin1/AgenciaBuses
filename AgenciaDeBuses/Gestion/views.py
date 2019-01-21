from django.contrib.auth.models import User, Group
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from Gestion.serializers import *
from Gestion.models import *

import json

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

class PasajeroList(generics.ListCreateAPIView):
    queryset = Pasajero.objects.all()
    serializer_class = PasajeroSerializer

class PasajeroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pasajero.objects.all()
    serializer_class = PasajeroSerializer

class ChoferList(generics.ListCreateAPIView):
    queryset = Chofer.objects.all()
    serializer_class = ChoferSerializer

class ChoferDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chofer.objects.all()
    serializer_class = ChoferSerializer

class BusList(generics.ListCreateAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class BusDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class HorarioList(generics.ListCreateAPIView):
    queryset = Horario.objects.all()
    serializer_class = HorarioSerializer

    def is_valid(self,request):
        if(int(request.data['hora'])>=0 and int(request.data['hora'])<=23 and int(request.data['minuto'])>=0 and int(request.data['minuto'])<=59 and request.data['dia'] in ['LU','MA','MI','JU','VI','SA','DO']):
            return (True,"True")
        return (False,"Formato Invalido")

    def post(self, request, format=None):
        serializer = HorarioSerializer(data=request.data)
        valid = self.is_valid(request)
        if  serializer.is_valid() and valid[0]:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        response_data={'message':valid[1]}
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

class HorarioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Horario.objects.all()
    serializer_class = HorarioSerializer

    def get_objecto(self, pk):
        try:
            return Horario.objects.get(pk=pk)
        except Horario.DoesNotExist:
            raise Http404

    def is_valid(self,request):
        if(int(request.data['hora'])>=0 and int(request.data['hora'])<=23 and int(request.data['minuto'])>=0 and int(request.data['minuto'])<=59 and request.data['dia'] in ['LU','MA','MI','JU','VI','SA','DO']):
            return (True,"True")
        return (False,"Formato Invalido")

    def put(self, request, pk, format=None):
        horario = self.get_objecto(pk)
        serializer = HorarioSerializer(horario, data=request.data)
        valid = self.is_valid(request)
        if  serializer.is_valid() and valid[0]:
            serializer.save()
            return Response(serializer.data)
        response_data={'message':valid[1]}
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

class TrayectoList(generics.ListCreateAPIView):
    queryset = Trayecto.objects.all()
    serializer_class = TrayectoSerializer

class TrayectoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trayecto.objects.all()
    serializer_class = TrayectoSerializer

class ViajeList(generics.ListCreateAPIView):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer

    def is_valid(self,request):
        viajes = Viaje.objects.filter(trayecto=request.data['trayecto'],horario=request.data['horario'])
        for viaje in viajes:
            if viaje.chofer.id == request.data['chofer'] or viaje.bus.id == request.data['bus']:
                return (False,"Error, El chofer o el bus ya estan trabajando en ese Trayecto y horario")
        return (True,"True")

    def post(self, request, format=None):
        serializer = ViajeSerializer(data=request.data)
        valid = self.is_valid(request)
        if  serializer.is_valid() and valid[0]:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        response_data={'message':valid[1]}
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

class ViajeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer

    def get_objecto(self, pk):
        try:
            return Viaje.objects.get(pk=pk)
        except Viaje.DoesNotExist:
            raise Http404

    def is_valid(self,request):
        viajes = Viaje.objects.filter(trayecto=request.data['trayecto'],horario=request.data['horario'])
        for viaje in viajes:
            if viaje.id != request.data['id'] and (viaje.chofer.id == request.data['chofer'] or viaje.bus.id == request.data['bus']):
                return (False,"Error, El chofer o el bus ya estan trabajando en ese Trayecto y horario")
        return (True,'True')

    def put(self, request, pk, format=None):
        viaje = self.get_objecto(pk)
        serializer = ViajeSerializer(viaje, data=request.data)
        valid = self.is_valid(request)
        if  serializer.is_valid() and valid[0]:
            serializer.save()
            return Response(serializer.data)
        response_data={'message':valid[1]}
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)


class AsignacionList(generics.ListCreateAPIView):
    queryset = Asignacion.objects.all()
    serializer_class = AsignacionSerializer

    def is_valid(self,request):
        vendidos = Asignacion.objects.filter(viaje=request.data['viaje']).count()
        ocupado= Asignacion.objects.filter(viaje=request.data['viaje'], npuesto=request.data['npuesto']).exists()
        if vendidos >= 10:
            return (False,"Error, no hay pasajes disponibles")
        if ocupado:
            return (False,"Error, el asiento ya esta ocupado")
        return (True,'True')

    def post(self, request, format=None):
        serializer = AsignacionSerializer(data=request.data)
        valid = self.is_valid(request)
        if serializer.is_valid() and valid[0] :
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        response_data={'message':valid[1]}
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

class AsignacionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Asignacion.objects.all()
    serializer_class = AsignacionSerializer

    def get_objecto(self, pk):
        try:
            return Asignacion.objects.get(pk=pk)
        except Asignacion.DoesNotExist:
            raise Http404

    def is_valid(self,request):
        ocupado= Asignacion.objects.filter(viaje=request.data['viaje'], npuesto=request.data['npuesto']).exclude(id=request.data['id']).exists()
        if ocupado:
            return (False,"Error, el asiento ya esta ocupado")
        return (True,'True')

    def put(self, request, pk, format=None):
        asignacion = self.get_objecto(pk)
        serializer = AsignacionSerializer(asignacion, data=request.data)
        valid = self.is_valid(request)
        if serializer.is_valid() and valid[0]:
            serializer.save()
            return Response(serializer.data)
        response_data={'message':valid[1]}
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)


def listado(request):
    if request.method == 'GET':
        response_data = []
        trayectos = Trayecto.objects.all()
        for trayecto in trayectos:
            suma=0
            cantidad=0
            viajes = Viaje.objects.filter(trayecto=trayecto)
            for viaje in viajes:
                pasajeros = Asignacion.objects.filter(viaje=viaje).count()
                suma=suma+pasajeros
                cantidad=cantidad+1
            response_data.append({'trayecto':TrayectoSerializer(trayecto).data,'promedio':suma/cantidad if cantidad>0 else 0})
        return JsonResponse(response_data, safe=False)

def vendidos(request,porcentaje,id_trayecto):
    if request.method == 'GET':
        response_data = []
        trayecto = Trayecto.objects.get(id=id_trayecto)
        viajes = Viaje.objects.filter(trayecto=trayecto)
        for viaje in viajes:
            pasajeros = Asignacion.objects.filter(viaje=viaje).count()
            p_vendido = (pasajeros*100)/MAX_PASAJEROS
            if p_vendido >= porcentaje:
                response_data.append({'Viaje':viaje.id,'Bus':BusSerializer(viaje.bus).data,'Pasajes_Vendidos':pasajeros,'Porcentaje_Vendido':p_vendido}) 
        return JsonResponse(response_data, safe=False)

