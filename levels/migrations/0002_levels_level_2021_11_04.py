# Generated by Django 3.2.9 on 2021-11-12 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('levels', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='levels',
            name='level_2021_11_04',
            field=models.CharField(blank=True, max_length=40),
        ),
    ]
