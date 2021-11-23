# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ko!8%7khb()jm0&7s4!kifck9&m1(x73256+oe_ox8es@%vc+e'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'shop_time',
        'USER': 'postgres',
        'PASSWORD': '123',
        'HOST': 'localhost'
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'saad.shoponline@gmail.com'
EMAIL_HOST_PASSWORD = 'qhpzknsqsduomkew'
EMAIL_USE_TLS = True


BT_ENVIRONMENT = 'sandbox'
BT_MERCHANT_ID = '3py89s2zrn2493mh'
BT_PUBLIC_KEY = '4csg8ntj5n7px7rs'
BT_PRIVATE_KEY = 'b7ea5436d216a19d7910252e15929f9f'

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '396238520330-hje0quvb15hrqou3fets9t4vpftjaqqt.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'QSJqcVcquWidOzOec4PKjMir'
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'openid'
]
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name', 'last_name']



SOCIAL_AUTH_FACEBOOK_KEY = '4345557475488148'
SOCIAL_AUTH_FACEBOOK_SECRET = '879ac5af069a781d02af255602ae4ac2'
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'fields': 'email, first_name, last_name'
}



CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000'
]

