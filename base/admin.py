from django.contrib import admin
from .models import Address, Category, CategoryProduct, Color, ProductType, Product, ProductImage, Review, Order, OrderItem, Slider

# Register your models here.
admin.site.register(Address)
admin.site.register(Category)
admin.site.register(CategoryProduct)
admin.site.register(Color)
admin.site.register(ProductType)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Slider)