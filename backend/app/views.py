from django.http import JsonResponse
from .models import PreoccupationEnvironnementale, TemperatureTerrestre

def preoccupations_json(request):
    data = list(PreoccupationEnvironnementale.objects.values())
    return JsonResponse(data, safe=False)

def temperatures_terrestres_json(request):
    data = list(TemperatureTerrestre.objects.values())
    return JsonResponse(data, safe=False)