from rest_framework import serializers
from .models import Category, Product

# Serializer converts model instances to JSON and validates input.
# Nested categories are shown in ProductSerializer for teaching nested data.

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name','slug']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)  # nested representation
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True, required=False
    )

    class Meta:
        model = Product
        fields = ['id','name','description','price','image_url','stock','created_at','category','category_id']
