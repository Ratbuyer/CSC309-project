from rest_framework import serializers

from studios.models import studio


class StudioSerializer(serializers.ModelSerializer):
  
    class Meta:
        model = studio
        fields = ['name', 'address', 'distance']

        ordering = ["distance"]
