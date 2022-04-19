from django.shortcuts import render
from .models import Product, ProductType, Category, CategoryProduct, Slider
from .serializers import ProductSerializer,ProductTypeSerializer, CategorySerializer, CategoryProductSerializer, SliderSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

class SliderViewSet(viewsets.ModelViewSet):
    queryset = Slider.objects.filter(featured=True)
    serializer_class = SliderSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductViewSet(viewsets.ModelViewSet):
    queryset = CategoryProduct.objects.all()
    serializer_class = CategoryProductSerializer
