from django.shortcuts import render

from .models import Cliente

# Create your views here.
"""CREACIÓN DE CONTROLADORES QUE MOSTRARÁN LOS TEMPLATES EN EL NAVEGADOR, RENDER IRÁ EN LA BUSQUEDA DE LA RUTA DEL TEMPLATE."""
def home(request):

    return render(request, 'core/home.html')  

def registro(request):
  
    if request.method == "POST":
        #IMPRESIÓN POR CONSOLA LOS DATOS OBTENIDOS CON EL MÉTODO POST.
        print(request.POST)
        #CREACIÓN DE UN OBJETO TIPO CLIENTE PARA AGREGAR CADA VALOR A SU CORRESPONDIENTE COLUMNA.
        formulario = Cliente()
        formulario.p_nombre = request.POST["name"]
        formulario.p_apellido = request.POST["last_name"]
        formulario.email = request.POST["email"]
        formulario.password = request.POST["password"]
        formulario.password2 = request.POST["password2"]
        formulario.usuario = request.POST["username"]
        #GUARDADO DE DATOS EN LA BASE DE DATOS.
        formulario.save()
        
    return render(request, 'core/registro.html')    
    
    
 

