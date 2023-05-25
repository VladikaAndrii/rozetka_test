from .models import Category, Product, ProductImage
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'slug', 'image', 'parent_category', 'created_at', 'updated_at']


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image']
        

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, required=False)

    class Meta:
        model = Product
<<<<<<< HEAD
        fields = ['id', 'title', 'slug', 'brand', 'country', 'size', 'color', 'category', 'price', 'created_at', 'updated_at', 'images']
=======
        fields = ['id', 'title', 'slug', 'description', 'brand', 'country', 'size', 'color', 'category', 'price', 'created_at', 'updated_at', 'images']
>>>>>>> c98963b1c8d60ca2c1022c0d248de1a520bd6ab9

    def create(self, validated_data):
        images_data = self.context.get('request').FILES.getlist('images')
        product = Product.objects.create(**validated_data)

        for image_data in images_data:
            ProductImage.objects.create(product=product, image=image_data)

        return product