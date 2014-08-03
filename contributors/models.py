from django.db import models

class Contributor(models.Model):
    facebook_id = models.TextField(default=0)
    contribution_date = models.DateTimeField('date contributed')
    lat = models.TextField(default=0)
    lng = models.TextField(default=0)
    name = models.TextField(default=0)

    # def __unicode__(self):
    #     return self.contribution_date