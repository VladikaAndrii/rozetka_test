from django.contrib import admin
from .models import Category, Product


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'parent_category', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'parent_category')
    list_filter = ('title', 'parent_category')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'brand', 'country', 'size', 'color', 'category', 'price', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'brand')
    list_filter = ('title', 'title', 'brand', 'country', 'size', 'color', 'category', 'price' )

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)