# Watch project with django and angular

## Instructions
- Clone this repository
- Installed a virtual env
- Execute: ```pip install -r requirements.txt```
- Execute: ```python manage.py migrate```
- Create an user: ```python manage.py createsuperuser```
- Run server: ```python manage.py runserver```

## On browser
- Server will run on localhost, port 8000 by default
- Login on django admin, create a new token for your user

## API endpoints
- GET: http://localhost:8000/api/v1/watches/
- POST: http://localhost:8000/api/v1/watches/
- PUT: http://localhost:8000/api/v1/watches/ID/
- DELETE: http://localhost:8000/api/v1/watches/ID/

## Tools
- You can use any tool you want to make requests on the API. Such as: insomnia, postman, requests...