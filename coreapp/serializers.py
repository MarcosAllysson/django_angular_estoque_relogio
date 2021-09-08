from rest_framework import serializers
from coreapp.models import Watch


class WatchSerializer(serializers.ModelSerializer):

    class Meta:

        model = Watch

        fields = (
            'id',
            'title',
            'quantity',
            'price'
        )
