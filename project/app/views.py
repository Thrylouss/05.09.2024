from django.shortcuts import render
from rest_framework import generics

from app.models import Author, Book
from app.serializers import AuthorSerializer, BookSerializer


# Create your views here.
class AuthorListVIew(generics.ListAPIView):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()


class AuthorDetailView(generics.RetrieveAPIView):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()


class BookListView(generics.ListAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.all()


class BookDetailView(generics.RetrieveAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.all()