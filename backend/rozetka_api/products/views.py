from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Category, Product, ProductImage
from .serializers import CategorySerializer, ProductSerializer, ProductImageSerializer


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        images_data = self.request.FILES.getlist('images')
        product = serializer.save()

        for image_data in images_data:
            ProductImage.objects.create(product=product, image=image_data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        images_serializer = ProductImageSerializer(instance.images.all(), many=True)
        response_data = serializer.data
        response_data['images'] = images_serializer.data
        return Response(response_data)

