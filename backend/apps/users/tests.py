from django.test import TestCase
from django.contrib.auth.models import User

class UserTestCase(TestCase):
    def test_create_user(self):
        u = User.objects.create_user(username='abc', password='pass1234')
        self.assertTrue(u.check_password('pass1234'))
