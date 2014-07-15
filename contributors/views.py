from django.shortcuts import render
from contributors.models import Contributor
from django.utils import timezone
from django.http import HttpResponseRedirect

# Create your views here.
def index(request):
    # data = {"contributors" : Contributor.objects.all()}
    return render(request, 'index.html')

def postToMap(request):
    contributor = Contributor.objects.create(contribution_date=timezone.now())
    if request.POST.get('facebookId', False):
        contributor.facebook_id = request.POST.get('facebookId', False).encode('utf8')
    if request.POST.get('latLng', False):
        contributor.lat_lng = request.POST.get('latLng', False).encode('utf8')

    contributor.save()
    return HttpResponseRedirect('/')