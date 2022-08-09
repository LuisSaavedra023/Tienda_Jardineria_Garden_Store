from django.shortcuts import render

# Create your views here.
"""CREACIÓN DE CONTROLADORES QUE MOSTRARÁN LOS TEMPLATES EN EL NAVEGADOR, RENDER IRÁ EN LA BUSQUEDA DE LA RUTA DEL TEMPLATE."""
def home(request):

    return render(request, 'core/home.html')  

def registro(request):

    return render(request, 'core/registro.html')  
 

