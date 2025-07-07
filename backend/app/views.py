from django.http import JsonResponse
from .models import PreoccupationEnvironnementale, TemperatureTerrestre, TemperatureOcean

def preoccupations_json(request):
    data = list(PreoccupationEnvironnementale.objects.values())
    return JsonResponse(data, safe=False)

def temperatures_terrestres_json(request):
    data = list(TemperatureTerrestre.objects.values())
    return JsonResponse(data, safe=False)

def temperatures_oceans_json(request):
    data = list(TemperatureOcean.objects.values())
    return JsonResponse(data, safe=False)