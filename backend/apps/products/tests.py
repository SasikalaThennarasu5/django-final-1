from django.test import TestCase
from .models import Category, Product

class ProductTestCase(TestCase):
    def setUp(self):
        cat = Category.objects.create(name='Test')
        Product.objects.create(category=cat, name='P1', price=9.99, stock=10)

    def test_product_count(self):
        self.assertEqual(Product.objects.count(), 1)
