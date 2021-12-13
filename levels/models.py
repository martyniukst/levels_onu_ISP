from django.db import models, IntegrityError, DataError
from datetime import date

class Levels(models.Model):

    # lvl_today = 'level'+str(date.today()).replace('-','_')
    olt = models.CharField(blank=True, max_length=30)
    mac = models.CharField(blank=True, max_length=20)
    epon = models.CharField(blank=True, max_length=20)
    level_2021_11_02 = models.CharField(blank=True, max_length=40)
    level_2021_11_03 = models.CharField(blank=True, max_length=40)
    level_2021_11_04 = models.CharField(blank=True, max_length=40)


    def get_all():
        all_levels = Levels.objects.all()
        return all_levels
