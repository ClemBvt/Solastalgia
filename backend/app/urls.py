"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from .views import preoccupations_json, temperatures_terrestres_json, temperatures_oceans_json, niveaux_oceans_json, sources_emissions_ges_json, especes_menacees_json, animaux_menaces_json

urlpatterns = [
    path('api/preoccupations/', preoccupations_json),
    path('api/temperatures-terrestres/', temperatures_terrestres_json),
    path('api/temperatures-oceans/', temperatures_oceans_json),
    path('api/niveaux-oceans/', niveaux_oceans_json),
    path('api/sources-emissions-ges/', sources_emissions_ges_json),
    path('api/especes-menacees/', especes_menacees_json),
    path('api/nombres-animaux-menaces/', animaux_menaces_json)
]

    


