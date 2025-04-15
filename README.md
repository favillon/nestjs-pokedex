<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en dev

1. Clona repo 
2. Acceder al poryecto
```sh
cd name_proyect
```
3. Instalar dependencias
```sh
yarn install
```
4. Tener instalador Nest CLI
```sh
yarn global add @nestjs/cli
```

5. Levantar BD mong
```sh
docker-compose up -d
```

6. Clona el archivo `.env-template` en `.env` y reemplazar los valores de las variables

7. Ejecutar
```sh 
yarn start:dev
```

7. Recontruir Data con el seed O Ejecutar la coleccion carpeta seed
```sh
curl --location --request POST 'localhost:3000/api/v1/seed'
```


## Crear contenedores  para `PROD`

Comando para creacion de contenedores
```sh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

Levantar correr
```sh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```


## Aceder  a los contenedores

app
```sh
docker exec -it pokedexapp-prod /bin/sh
node --version
```
mongo
```sh
docker exec -it mongo-poke-prod /bin/sh
mongod --version
```

## Stack

- nestjs
- typescript
- mongodb
- docker