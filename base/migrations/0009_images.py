# Generated by Django 4.0.4 on 2022-04-20 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_slider_link_to'),
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
                ('alt', models.CharField(max_length=100)),
                ('uploaded_date', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]