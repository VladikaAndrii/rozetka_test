from .models import Category, Product
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'slug', 'image', 'parent_category', 'created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'slug', 'image', 'brand', 'country', 'size', 'color', 'category', 'price', 'created_at', 'updated_at']
