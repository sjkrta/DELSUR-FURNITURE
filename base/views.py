from django.shortcuts import render
from .models import Product, ProductType, Category, CategoryProduct
from .serializers import ProductSerializer,ProductTypeSerializer, CategorySerializer, CategoryProductSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductViewSet(viewsets.ModelViewSet):
    queryset = CategoryProduct.objects.all()
    serializer_class = CategoryProductSerializer