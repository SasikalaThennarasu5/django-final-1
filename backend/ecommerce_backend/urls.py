from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # API v1 namespace — easy versioning for later.
    path('api/v1/', include('apps.products.urls')),
    path('api/v1/', include('apps.users.urls')),
    path('api/v1/', include('apps.orders.urls')),
]
