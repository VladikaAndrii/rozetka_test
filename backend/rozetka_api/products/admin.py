from django.contrib import admin
from .models import Category, Product, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'parent_category', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'parent_category')
    list_filter = ('title', 'parent_category')

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    list_display = ('id', 'title', 'brand', 'country', 'size', 'color', 'category', 'price', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'brand')
    list_filter = ('title', 'title', 'brand', 'country', 'size', 'color', 'category', 'price' )

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)

