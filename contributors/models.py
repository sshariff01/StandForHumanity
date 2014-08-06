from django.db import models

class Contributor(models.Model):
    facebook_id = models.TextField(default=0)
    score = models.IntegerField(default=0)
    last_contribution_date = models.DateTimeField('date contributed')
    lat = models.TextField(default=0)
    lng = models.TextField(default=0)
    name = models.TextField(default=0)

class Donation_StandForPalestine(models.Model):
    contributor = models.ForeignKey(Contributor)
    contribution_date = models.DateTimeField('date contributed')
    name = models.TextField(default=0)
    email = models.TextField(default=0)
    address_city = models.TextField(default=0)
    address_country = models.TextField(default=0)
    address_line1 = models.TextField(default=0)
    address_line2 = models.TextField(default=0)
    address_zip = models.TextField(default=0)
    amount = models.TextField(default=0)
    receipt_required = models.TextField(default="NO")