from django.shortcuts import render
from contributors.models import Contributor
from django.utils import timezone
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

import json
import urllib2
import logging
import stripe

# Create your views here.
def index(request):
    contributors = Contributor.objects.all().exclude(facebook_id=0)
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

def donate(request):
    # Set your secret key: remember to change this to your live secret key in production
    # See your keys here https://dashboard.stripe.com/account
    stripe.api_key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"

    # Get the credit card details submitted by the form
    token = request.POST['stripeToken']

    # Create the charge on Stripe's servers - this will charge the user's card
    try:
      charge = stripe.Charge.create(
          amount=1000, # amount in cents, again
          currency="usd",
          card=token,
          description="payinguser@example.com"
      )

      contributor = Contributor.objects.create(contribution_date=timezone.now())
      if request.POST.get('fb-id', False):
        contributor.facebook_id = request.POST.get('fb-id', False).encode('utf8')
      if request.POST.get('map-coordinates-lat', False):
        contributor.lat = request.POST.get('map-coordinates-lat', False).encode('utf8')
      if request.POST.get('map-coordinates-lng', False):
        contributor.lng = request.POST.get('map-coordinates-lng', False).encode('utf8')
      contributor.save()

    except stripe.CardError, e:
      # The card has been declined
      pass


    return HttpResponseRedirect('/')