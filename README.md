# NestJS + NextJS SSR Starter

> NestJS + NextJS + Typeorm MVC SSR Starter with [nest-next](https://github.com/kyle-mccarthy/nest-next) package

## Tech Stack

- node, npm, typescript, docker, docker-compose, nodemon, tsx
- eslint, prettier
- jest, supertest
- nestjs(version 8), nextjs, typeorm
- nest-next

## Getting Start

1. `$ git clone https://github.com/amamov/nest-next-typeorm-ssr-stater.git`

2. `$ npm i`

3. `$ rm -rf .git`

4. `$ npm run dev`

## Config .env

```.env
# app
NODE_ENV='development'
PORT=5500
DB_NAME=...
DB_HOST=...
DB_PORT=...
DB_USERNAME=...
DB_PASSWORD=...

# db
POSTGRES_DB=...
POSTGRES_USER=...
POSTGRES_PASSWORD=...

# db admin
PGADMIN_DEFAULT_EMAIL=...
PGADMIN_DEFAULT_PASSWORD=...
```
