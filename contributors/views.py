from django.shortcuts import render
from contributors.models import Contributor
from django.utils import timezone
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

import json
import urllib2
import logging

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

@csrf_exempt
def ipn(request):
    PAYPAL_IPN_CONF_BASE_URL = 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_notify-validate'
    post_params = ""

    if request.POST:
        for key, value in request.POST.iteritems():
            post_params += "&" + key + "=" + value
    elif request.GET:
        print "THERE IS NO POST DATA"
        for key, value in request.GET.iteritems():
            post_params += "&" + key + "=" + value

    if request.method == 'POST':
        print "THIS WAS A POST REQUEST, RECEIVED HERE"

    confirmation_url = PAYPAL_IPN_CONF_BASE_URL + post_params
    print "CONFIRMATION URL: " + confirmation_url
    confirmation_response = urllib2.urlopen(confirmation_url)
    confirmation_data = confirmation_response.read()
    print "CONFIRMATION DATA: " + confirmation_data
    # confirmation_json = json.loads(confirmation_data)

    if confirmation_data == "VERIFIED":
        if request.POST.get('payment_status').encode('utf8'):
            if request.POST.get('payment_status').encode('utf8') == "Completed":
                contributor = Contributor.objects.filter(transaction_id=request.POST.get('txn_id').encode('utf8'))
                if not contributor:
                    contributor = Contributor.objects.create(contribution_date=timezone.now())
                    contributor.transaction_id = request.POST.get('txn_id').encode('utf8')
                    contributor.save()


    return HttpResponseRedirect('/')