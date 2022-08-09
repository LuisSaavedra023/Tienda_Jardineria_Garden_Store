"""IMPORTACIÓN DE PATH Y DE LAS FUNCIONES CREADAS EN VIEWS INICIALMENTE SE COPIA LA INFORMACIÓN DEL URLS UBICADO EN EL PROYECTO."""
from django.urls import path
from .views import home,registro 
"""MODIFICACIÓNDE PATH, NO SE LE ASIGNA UN NOMBRE DE RUTA APRA INGRESAR EN EL NAVEGADOR, EL PATH VAB A BUSCAR A LA FUNCIÓN HOME DE VIEWS.PY, Y EL RENDER EJECUTA LA RUTA, SE LE OTORGA UN ALIAS A LA URL."""
urlpatterns = [
    path('', home, name="home"),
    path('registro/', registro, name="registro"),
    

]