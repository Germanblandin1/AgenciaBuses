from django.db import models

MAX_PASAJEROS = 10

class Pasajero(models.Model):
    nombre = models.CharField(max_length=100, blank=True, default='')

    def __str__(self):
        return self.nombre

class Chofer(models.Model):
    nombre = models.CharField(max_length=100, blank=True, default='')

    def __str__(self):
        return self.nombre

class Bus(models.Model):
    nombre = models.CharField(max_length=100, blank=True, default='')

    def __str__(self):
        return self.nombre

class Horario(models.Model):
    LUNES = 'LU'
    MARTES = 'MA'
    MIERCOLES = 'MI'
    JUEVES = 'JU'
    VIERNES = 'VI'
    SABADO= 'SA'
    DOMINGO = 'DO'
    DIAS_CHOICES = (
        (LUNES, 'Lunes'),
        (MARTES, 'Martes'),
        (MIERCOLES, 'Miercoles'),
        (JUEVES, 'Jueves'),
        (VIERNES, 'Viernes'),
        (SABADO, 'Sabado'),
        (DOMINGO, 'Domingo'),
    )
    dia = models.CharField(max_length=100, choices=DIAS_CHOICES)
    hora = models.IntegerField()
    minuto = models.IntegerField()

    def __str__(self):
        return self.dia+" "+str(self.hora)+" "+str(self.minuto)

class Trayecto(models.Model):
    origen = models.CharField(max_length=100, blank=True, default='')
    destino = models.CharField(max_length=100, blank=True, default='')
    
    def __str__(self):
        return self.origen+"-"+self.destino

class Viaje(models.Model):
    trayecto = models.ForeignKey(Trayecto, on_delete=models.CASCADE)
    horario = models.ForeignKey(Horario, on_delete=models.CASCADE)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    chofer = models.ForeignKey(Chofer, on_delete=models.CASCADE)

class Asignacion(models.Model):
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    pasajero = models.ForeignKey(Pasajero, on_delete=models.CASCADE)
    npuesto = models.IntegerField()