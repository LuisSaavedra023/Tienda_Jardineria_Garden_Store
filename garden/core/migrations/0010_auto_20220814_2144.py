# Generated by Django 3.1.2 on 2022-08-15 01:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20220814_2136'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='categoria_cliente',
        ),
        migrations.DeleteModel(
            name='CategoriaCli',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
    ]
