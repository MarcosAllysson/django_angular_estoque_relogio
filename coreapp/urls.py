from coreapp.views import WatchViewSet
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register('watches', WatchViewSet)
