from django.forms import SlugField
from rest_framework import serializers
from .models import Color, Product,ProductType, ProductImage, Category, CategoryProduct
from django.contrib.auth.models import User


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = '__all__'

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(many=True, read_only=True)
    types = ProductTypeSerializer(many=True, read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = '__all__'


class CategoryProductSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = CategoryProduct
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    categories =  CategoryProductSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = '__all__'
