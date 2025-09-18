from django.contrib import admin
from django.contrib.auth.models import User

# Users are managed with Django's built-in User model via admin.
admin.site.unregister(User)
admin.site.register(User)
