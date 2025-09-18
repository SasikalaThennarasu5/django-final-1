from rest_framework import viewsets, filters
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.pagination import PageNumberPagination

# ViewSets group common behavior (list/retrieve/create/update/delete).
# For this teaching project, Product is read-only for regular users; admin can modify in Django admin.

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """List and retrieve products. Supports search and ordering via query params."""
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['price','created_at']

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
