from unicodedata import category
from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.forms import CharField, ImageField

# Create your models here.
class Image(models.Model):
    image = models.ImageField()
    alt = models.CharField(max_length=100)
    uploaded_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.alt

class Slider(models.Model):
    title  = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    image = models.ImageField(upload_to='slider')
    bg_color = models.CharField(max_length=50, default='#ffffff')
    featured = models.BooleanField(default=False)
    link_to = models.CharField(default='', max_length=100)

    def __str__(self):
        return self.title


class Address(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    street  = models.CharField(max_length=100)
    city    = models.CharField(max_length=50)
    zip_code = models.IntegerField()
    State_choices = [
        ('ACT','Australian Capital Territory'),
        ('NSW','New South Wales'),
        ('Qld','Queensland'),
        ('SA','South Australia'),
        ('Vic','Victoria'),
        ('Tas','Tasmania'),
        ('WA','Western Australia'),
    ]
    state = models.CharField(max_length=3,choices=State_choices)

    class Meta:
        verbose_name_plural = "Addresses"

    def __str__(self):
        return self.user_id.username

class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="categories")
    created_date = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name
    
class CategoryProduct(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, related_name='categories',on_delete=models.CASCADE)
    image = models.ImageField(upload_to="categories/products")
    createdDate = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    category_product_id = models.ForeignKey(CategoryProduct, related_name='products',on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = RichTextField()
    price = models.DecimalField(max_digits=10, decimal_places = 2)
    discount = models.DecimalField(max_digits=2, decimal_places=2, default=0)
    rating = models.DecimalField(max_digits=12,decimal_places=2, default=0)
    stock = models.IntegerField()
    soldNum = models.IntegerField()
    numReviews = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Color(models.Model):
    color = models.CharField(max_length=100)
    product_id = models.ForeignKey(Product,related_name='colors', on_delete=models.CASCADE)

    def __str__(self):
        return self.color

class ProductType(models.Model):
    name = models.CharField(max_length=100)
    specification = RichTextField()
    warranty = models.CharField(max_length=100)
    product_id = models.ForeignKey(Product,related_name='types', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product_id = models.ForeignKey(Product, related_name='images',on_delete=models.CASCADE)
    image = models.ImageField(upload_to="categories/products/product")
    
    def __str__(self):
        return self.product_id.name

class Review(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating =  models.IntegerField()
    comment = models.DecimalField(max_digits=10, decimal_places = 1)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_id.username

class Order(models.Model):
    Status_choices = [
        ('P','Pending'),
        ('C','Canceled'),
        ('D','Delivered'),
    ]
    Delivery_choices = [
        ('P','Pick Up'),
        ('D','Delivered'),
    ]
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=200)
    shippingPrice = models.DecimalField(max_digits=12,decimal_places=2)
    total_price = models.DecimalField(max_digits=12, decimal_places = 2)
    delivery = models.CharField(max_length=1,choices=Delivery_choices)
    status = models.CharField(max_length=1,choices=Status_choices,default=Status_choices[0])
    created_at= models.DateTimeField(auto_now_add = True)
    paid_at= models.DateTimeField(auto_now_add = False)
    delivered_at= models.DateTimeField(auto_now_add = False)
    updated_at= models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.id

class OrderItem(models.Model):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places = 2)
    quantity = models.IntegerField()
    created_at= models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.product_id.name