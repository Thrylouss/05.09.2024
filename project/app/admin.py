from django.contrib import admin

from app.models import Book, Author

# Register your models here.
admin.site.register([Author, Book])