from rest_framework import serializers
from .models import Order, OrderItem
from apps.products.serializers import ProductSerializer

# Nested serializers help demonstrate relationships:
class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id','product','quantity','price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    # For creation we accept a simple nested structure via a custom create method.
    class Meta:
        model = Order
        fields = ['id','user','created_at','status','items']
