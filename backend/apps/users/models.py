from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
)
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from apps.users.managers import CustomUserManager, UserRoles


class User(
    AbstractBaseUser,
    PermissionsMixin,
):
    '''
    Кастомная модель пользователей.
    Для входа требуется email пользователя и пароль.
    '''
    first_name = models.CharField('Имя', max_length=50, blank=True)
    last_name = models.CharField('Фамилия', max_length=50, blank=True)
    middle_name = models.CharField('Отчество', max_length=50, blank=True)
    date_joined = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата регистрации',
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name='Дата обновления',
    )
    email = models.EmailField('Email адрес', unique=True)
    phone_number = PhoneNumberField(
            'Номер телефона',
            blank=True,
            null=True,
            unique=True,
    )
    birthday = models.DateField(
        'День рождения',
        blank=True,
        null=True,
    )
    role = models.CharField(
        'Тип учетной записи',
        max_length=5,
        choices=UserRoles.choices,
        default=UserRoles.USER,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    @property
    def is_admin(self):
        return self.role == UserRoles.ADMIN

    @property
    def is_user(self):
        return self.role == UserRoles.USER

    @property
    def is_staff(self):
        return self.is_admin

    @property
    def is_superuser(self):
        return self.is_admin

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    def __str__(self):
        return f'{self.get_full_name()}'

    def get_full_name(self):
        '''Возвращает полное имя пользователя с заглавной буквы.'''
        full_name = " ".join(
            (self.last_name, self.first_name, self.middle_name)
        )
        return full_name.strip().title()

    get_full_name.short_description = "ФИО"
