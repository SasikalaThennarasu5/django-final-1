from django.db import models
from django.contrib.auth.models import User
from apps.products.models import Product

class Order(models.Model):
    STATUS_CHOICES = [
        ('PENDING','Pending'),
        ('PAID','Paid'),
        ('SHIPPED','Shipped'),
    ]
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')

    def __str__(self):
        return f'Order #{self.id} by {self.user.username}'

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # price per item at order time

    def __str__(self):
        return f'{self.quantity} x {self.product.name if self.product else "Deleted product"}'
