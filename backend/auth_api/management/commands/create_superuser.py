import os
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Create a Django superuser from environment variables'

    def handle(self, *args, **options):
        username = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'soroosh.codefi')
        email = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@codefi.ca')
        password = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'sorooshx@codefi2026!')

        # Check if superuser already exists
        if User.objects.filter(username=username).exists():
            self.stdout.write(
                self.style.WARNING(f'Superuser "{username}" already exists. Skipping creation.')
            )
            return

        # Create superuser
        User.objects.create_superuser(
            username=username,
            email=email,
            password=password
        )
        self.stdout.write(
            self.style.SUCCESS(
                f'✓ Superuser "{username}" created successfully\n'
                f'  Email: {email}\n'
                f'  Django Admin: /django-admin/'
            )
        )
