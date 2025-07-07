from django.http import JsonResponse
from .models import PreoccupationEnvironnementale, TemperatureTerrestre, TemperatureOcean, NiveauOcean, SourceEmissionGES, EspeceMenacee

def preoccupations_json(request):
    data = list(PreoccupationEnvironnementale.objects.values())
    return JsonResponse(data, safe=False)

def temperatures_terrestres_json(request):
    data = list(TemperatureTerrestre.objects.values())
    return JsonResponse(data, safe=False)

def temperatures_oceans_json(request):
    data = list(TemperatureOcean.objects.values())
    return JsonResponse(data, safe=False)

def niveaux_oceans_json(request):
    data = list(NiveauOcean.objects.values())
    return JsonResponse(data, safe=False)

def sources_emissions_ges_json(request):
    data = list(SourceEmissionGES.objects.values())
    return JsonResponse(data, safe=False)

def especes_menacees_json(request):
    data = list(EspeceMenacee.objects.values())
    return JsonResponse(data, safe=False)
