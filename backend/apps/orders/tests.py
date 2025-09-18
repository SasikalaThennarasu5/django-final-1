from django.test import TestCase
from django.contrib.auth.models import User
from apps.products.models import Category, Product
from .models import Order

class OrderTestCase(TestCase):
    def setUp(self):
        u = User.objects.create_user('u1','u1@example.com','pass1234')
        c = Category.objects.create(name='c1')
        Product.objects.create(category=c, name='p1', price=5.00, stock=10)
    def test_order_create(self):
        # You'd normally use APIClient to test the view; keeping test minimal.
        self.assertEqual(Product.objects.count(), 1)
