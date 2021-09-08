from django.contrib import admin
from coreapp.models import Watch


@admin.register(Watch)
class WatchAdmin(admin.ModelAdmin):
    list_display = ('title', 'quantity', 'price')
