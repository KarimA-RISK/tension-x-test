# TENSION-X 

##Start test project
    
    docker-compose up -d

    Will start node js backend (nestjs framework), mysql database and make migrations

#### Methods

POST
http://127.0.0.1:7005/sign-up

body example : {
    "password": "12345678a",
    "passwordConfirmation": "12345678a",
    "roles": "Admin",
    "email": "admin@gmail.com"
    }

POST
http://127.0.0.1:7005/sign-in

body example : {
    "password": "12345678a",
    "email": "admin@gmail.com"
    }

Roles types: Guest, User, Supervisor, Admin

GET
http://127.0.0.1:7005/pages/guest

Bearer Token : .......

GET
http://127.0.0.1:7005/pages/user

Bearer Token : .......

GET
http://127.0.0.1:7005/pages/supervisor

Bearer Token : .......

GET
http://127.0.0.1:7005/pages/admin

Bearer Token : .......