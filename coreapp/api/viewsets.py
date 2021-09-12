from rest_framework import mixins
from rest_framework import viewsets
from coreapp.api.serializers import WatchSerializer
from coreapp.models import Watch


class WatchViewSet(mixins.ListModelMixin,
                   mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):

    queryset = Watch.objects.all()
    serializer_class = WatchSerializer
