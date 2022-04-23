from django.shortcuts import render
from .models import Order, OrderItem, Product, ProductType, Category, CategoryProduct, Slider
from .serializers import OrderItemSerializer, OrderSerializer, ProductSerializer,ProductTypeSerializer, CategorySerializer, CategoryProductSerializer, SliderSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

def index(request):
    return render(request, 'index.html')

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

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    