from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255, null=False)
    parent_category = models.ForeignKey(
        "self", null=True, blank=True, related_name="children", on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(
        Category, related_name="products", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255, null=False)
    brand = models.CharField(max_length=128, null=True)
    country = models.CharField(max_length=128, null=True)
    color = models.CharField(max_length=128, null=True)
    size = models.CharField(max_length=128, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title