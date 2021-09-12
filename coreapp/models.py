from django.db import models


class Base(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Watch(Base):
    title = models.CharField(max_length=50)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    photo = models.URLField(null=True, blank=True)

    def __str__(self):
        return f'{self.title}, {self.quantity}, $ {self.price}'

    class Meta:
        ordering = ['price']
        verbose_name = 'watch'
        verbose_name_plural = 'watches'

