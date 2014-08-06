from django.shortcuts import render
from contributors.models import Contributor, Donation_StandForPalestine
from django.utils import timezone
from django.http import HttpResponseRedirect

import json
import urllib2
import stripe

GRAPH_API_BASE_URL = 'https://graph.facebook.com/'

def index(request):
    contributors = Contributor.objects.all().exclude(facebook_id=0)
    lat = []
    lng =[]
    fb_id = []
    name = []
    datestamp = []
    score = []

    for contributor in contributors:
        lat.append(contributor.lat.encode('utf8'))
        lng.append(contributor.lng.encode('utf8'))
        fb_id.append(contributor.facebook_id.encode('utf8'))
        name.append(contributor.name.encode('utf8'))
        datestamp.append(str(contributor.last_contribution_date.strftime('%d %B %Y %I:%M%p')) + " GMT")
        score.append(contributor.score)


    arrayOfContributors = []
    for i in range(0, contributors.__len__()):
        dict = {
            "lat" : lat[i],
            "lng" : lng[i],
            "fb_id" : fb_id[i],
            "name" : name[i],
            "datestamp" : datestamp[i],
            "score" : score[i]
        }
        arrayOfContributors.append(dict)

    dump = json.dumps(arrayOfContributors)
    data = {"contributors" : dump}


    return render(request, 'index.html', data)

def postToMap(request):
    if request.POST.get('fbAccessToken', False):
        request_url = GRAPH_API_BASE_URL+"v2.0/me?access_token="+request.POST.get('fbAccessToken', False)
        response = urllib2.urlopen(request_url)
        response_data = response.read()
        data = json.loads(response_data)

    if Contributor.objects.filter(facebook_id=data['id']).exists():
        contributor = Contributor.objects.get(facebook_id=data['id'])
        contributor.last_contribution_date=timezone.now()
        # This Contributor has contributed before!
        contributor.score = 3
    else:
        contributor = Contributor.objects.create(last_contribution_date=timezone.now())
        contributor.facebook_id = data['id']
        contributor.name = data['first_name'] + " " + data['last_name']
        contributor.score = 2

    if request.POST.get('lat', False):
        contributor.lat = request.POST.get('lat', False).encode('utf8')
    if request.POST.get('lng', False):
        contributor.lng = request.POST.get('lng', False).encode('utf8')

    contributor.save()
    return HttpResponseRedirect('/')

def donate(request):
    # Set your secret key: remember to change this to your live secret key in production
    # See your keys here https://dashboard.stripe.com/account
    stripe.api_key = "sk_test_4Wyr9PufmlKtucQDuRqESk1I"

    # Get the credit card details submitted by the form
    token = request.POST['stripeToken']

    # Create the charge on Stripe's servers - this will charge the user's card
    try:
        charge = stripe.Charge.create(
            amount=request.POST['amount'], # amount in cents, again
            currency=request.POST['currency'],
            card=token,
            # description="payinguser@example.com",
        )

        request_url = GRAPH_API_BASE_URL+"v2.0/me?access_token="+request.POST.get('fb-access-token', False)
        response = urllib2.urlopen(request_url)
        response_data = response.read()
        data = json.loads(response_data)

        if Contributor.objects.filter(facebook_id=data['id']).exists():
            contributor = Contributor.objects.get(facebook_id=data['id'])
            # This Contributor has contributed before!
            contributor.last_contribution_date=timezone.now()
            contributor.score = 3
        else:
            contributor = Contributor.objects.create(last_contribution_date=timezone.now())
            contributor.facebook_id = data['id']
            contributor.name = data['first_name'] + " " + data['last_name']
            contributor.score = 1

        if request.POST.get('map-coordinates-lat', False):
            contributor.lat = request.POST.get('map-coordinates-lat', False).encode('utf8')
        if request.POST.get('map-coordinates-lng', False):
            contributor.lng = request.POST.get('map-coordinates-lng', False).encode('utf8')

        donation = Donation_StandForPalestine(contributor=contributor, contribution_date=timezone.now())
        donation.email = request.POST.get('stripeEmail', False).encode('utf8')
        amount = str(charge['amount'])
        donation.amount = amount[:len(amount)-2] + '.' + amount[len(amount)-2:]
        if charge['card']['name']:
            donation.name=charge['card']['name']
        if charge['card']['address_city']:
            # As long as any of the address attributes exist in the card hash, we know the user has selected that they want a receipt
            donation.receipt_required = "YES"
            donation.address_city = charge['card']['address_city']

        if charge['card']['address_country']:
            donation.address_country = charge['card']['address_country']

        if charge['card']['address_line1']:
            if charge['card']['address_line1_check'] == 'pass':
                donation.address_line1 = charge['card']['address_line1']
            else:
                donation.address_line1 = 'error'

        if charge['card']['address_line2']:
            donation.address_line2 = charge['card']['address_line2']

        if charge['card']['address_state']:
            donation.address_state = charge['card']['address_state']

        if charge['card']['address_zip']:
            if charge['card']['address_zip_check']:
                donation.address_zip = charge['card']['address_zip']
            else:
                donation.address_zip = 'error'

        donation.save()
        contributor.save()

    except stripe.CardError, e:
      # The card has been declined
      pass


    return HttpResponseRedirect('/')