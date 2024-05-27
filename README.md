# How to run

This guide assumes you have Docker and Docker Compose installed and running on your machine.

## Environment variables

Create a `.env` file in the root of the project with the following content:
```apacheconf
MYSQL_HOST=mariadb
MYSQL_ROOT_PASSWORD=myrootpassword
MYSQL_DATABASE=venel
MYSQL_USER=myuser
MYSQL_PASSWORD=mypassword
SESSION_SECRET=mysecret
ALLOW_FREE_REGISTRATION=true
UI_DEPLOYMENT_URL=http://localhost:3001
WEBSOCKET_URL=ws://127.0.0.1:8912
```

## Windows

```bash
docker-compose build --no-cache; docker-compose up -d
```

## Linux

```bash
docker-compose build --no-cache && docker-compose up -d
```

# API Docs

Access [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/) after running the application.