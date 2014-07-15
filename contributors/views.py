from django.shortcuts import render
from contributors.models import Contributor
from django.utils import timezone
from django.http import HttpResponseRedirect
import json

# Create your views here.
def index(request):
    contributors = Contributor.objects.all()
    lat = []
    lng =[]

    for contributor in contributors:
        lat.append(contributor.lat.encode('utf8'))
        lng.append(contributor.lng.encode('utf8'))

    arrayOfLatLngs = []
    for i in range(0, contributors.__len__()):
        dict = {
            "lat" : lat[i],
            "lng" : lng[i]
        }
        arrayOfLatLngs.append(dict)

    dump = json.dumps(arrayOfLatLngs)
    data = {"contributors" : dump}

    return render(request, 'index.html', data)

def postToMap(request):
    contributor = Contributor.objects.create(contribution_date=timezone.now())
    if request.POST.get('facebookId', False):
        contributor.facebook_id = request.POST.get('facebookId', False).encode('utf8')
    if request.POST.get('lat', False):
        contributor.lat = request.POST.get('lat', False).encode('utf8')
    if request.POST.get('lng', False):
        contributor.lng = request.POST.get('lng', False).encode('utf8')

    contributor.save()
    return HttpResponseRedirect('/')