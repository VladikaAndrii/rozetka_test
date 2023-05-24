# Generated by Django 4.1 on 2023-05-23 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="category",
            name="image",
            field=models.ImageField(
                blank=True, null=True, upload_to="images/category_images/"
            ),
        ),
        migrations.AlterField(
            model_name="productimage",
            name="image",
            field=models.ImageField(upload_to="images/product_images/"),
        ),
    ]
