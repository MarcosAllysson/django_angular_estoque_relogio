from rest_framework import mixins
from rest_framework import permissions
from rest_framework import viewsets
from coreapp.models import Watch
from coreapp.serializers import WatchSerializer


class WatchViewSet(mixins.ListModelMixin,
                   mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):

    permission_classes = (permissions.DjangoModelPermissions,)
    queryset = Watch.objects.all()
    serializer_class = WatchSerializer
