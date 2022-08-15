from pyexpat import model

from django.db import models

# Create your models here.
class CategoriaCli(models.Model):
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre
#CREACIÓN DE TABLA CLIENTE SE UTILIZARÁ PARA RECIBIR LOS DATOS DEL FORMULARIO. 
class Cliente(models.Model):
    #DJANGO CREA POR DEFECTO EL ID.
    p_nombre = models.CharField(max_length=50)
    p_apellido = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=8)
    password2 = models.CharField(max_length=8)
    usuario = models.CharField(max_length=20)
    #categoria_cliente = models.ForeignKey(CategoriaCli, on_delete=models.CASCADE)

    def __str__(self):
        return self.p_nombre

  
