# Generated by Django 3.2.7 on 2021-09-12 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coreapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='watch',
            name='photo',
            field=models.URLField(blank=True, null=True),
        ),
    ]