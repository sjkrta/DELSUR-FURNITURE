from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from base import views, views_accounts
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'slider', views.SliderViewSet)
router.register(r'product', views.ProductViewSet),
router.register(r'category', views.CategoryViewSet),
router.register(r'category-product', views.CategoryProductViewSet),
router.register(r'order', views.OrderViewSet),
router.register(r'order-item', views.OrderItemViewSet),

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('register/', views_accounts.register_view, name='register'),
    path('login/', views_accounts.login_view, name='login'),
    path('logout/', views_accounts.logout_view, name='logout'),
    path('', views.index, name='home'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)