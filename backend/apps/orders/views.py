from rest_framework import generics, permissions
from .models import Order, OrderItem
from .serializers import OrderSerializer
from rest_framework.response import Response
from django.db import transaction
from apps.products.models import Product

class CreateOrderView(generics.CreateAPIView):
    """Create an order with items. Requires authentication.

    Expected payload example:
    {
      "items": [
        {"product_id": 1, "quantity": 2},
        {"product_id": 3, "quantity": 1}
      ]
    }
    """
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        items = request.data.get('items', [])
        if not items:
            return Response({'error': 'Cart is empty'}, status=400)

        with transaction.atomic():
            order = Order.objects.create(user=request.user)
            for it in items:
                product_id = it.get('product_id')
                qty = int(it.get('quantity', 1))
                product = Product.objects.filter(id=product_id).first()
                if not product:
                    transaction.set_rollback(True)
                    return Response({'error': f'Product {product_id} not found'}, status=400)
                OrderItem.objects.create(order=order, product=product, quantity=qty, price=product.price)
            serializer = OrderSerializer(order, context={'request': request})
            return Response(serializer.data, status=201)
