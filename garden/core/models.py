from pyexpat import model
from tkinter import CASCADE
from django.db import models

# Create your models here.
#CREACIÓN DE TABLA CLIENTE SE UTILIZARÁ PARA RECIBIR LOS DATOS DEL FORMULARIO. 
class Cliente(models.Model):
    #DJANGO CREA POR DEFECTO EL ID.
    p_nombre = models.CharField(max_length=50)
    p_apellido = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=8)
    password2 = models.CharField(max_length=8)
    usuario = models.CharField(max_length=8)

class Boleta(models.Model):

    producto = models.CharField(max_length= 80)
    """CREACIÓN DE LLAVE FORÁNEA SE TRASPASA LA LLAVE DE CLIENTE A BOLETA SE EJECUTA EL ELIMINADO DE DATOS EN CASCADA AL ELIMINAR UNA BOLETA DE ELIMINA LOS DATOS DEL ID DEL CLIENTE."""
    id_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)    
