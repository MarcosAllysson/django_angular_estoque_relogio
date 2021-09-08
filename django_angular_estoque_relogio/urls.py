from django.contrib import admin
from django.urls import path, include
from coreapp.urls import router

urlpatterns = [
    path('painel/', admin.site.urls),
    path('auth/', include('rest_framework.urls')),
    path('api/v1/', include(router.urls))
]
