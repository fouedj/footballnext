## Football Project Documentation

This document provides instructions on how to set up and run the football application, including the Next.js frontend, the NestJS backend, and a MongoDB database. All components are managed using Docker.

## Prerequisites

Ensure you have the following installed on your machine:

Docker

# and

Docker Compose

# and

Node.js and npm

## Getting Started

Steps to Run the Project

1. Clone the Repository
   git clone <https://github.com/fouedj/footballnext.git>
   cd football

2. Backend Configuration
   Ensure the Dockerfile for the backend is located in the backend/ directory.

Content of the Dockerfile for the Backend:

# Utiliser une image de base contenant Node.js 18 pour construire l'application

FROM node:18 AS build

# Définir le répertoire de travail

WORKDIR /app

# Copier le fichier package.json et package-lock.json (si présent)

COPY package\*.json ./

# Installer les dépendances

RUN npm install

# Copier tout le reste du code source

COPY . .

# Construire l'application pour la production

RUN npm run build

# Utiliser une image de base plus légère pour servir l'application

FROM nginx:alpine

# Copier les fichiers de build dans le répertoire de nginx

COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80

EXPOSE 80

# Démarrer nginx

CMD ["nginx", "-g", "daemon off;"]

3. Docker Compose Configuration
   Ensure the docker-compose-dev.yml file is located at the root of the project.

Content of docker-compose-dev.yml:

version: "3.8"
services:
nestjs-app:
image: nestjs-app:latest
container_name: api
ports: - "3000:3000"
depends_on: - mongo
environment:
MONGO_URI: mongodb://mongo:27017/football
networks: - app-network
restart: always

mongo:
image: bitnami/mongodb
container_name: mongodb_new
ports: - "27017:27017"
volumes: - mongo-data:/data/db
networks: - app-network
restart: always

football-front:
image: fouedjaridi122/football-front:v2
container_name: front
ports: - "80:80"
networks: - app-network

volumes:
mongo-data:

networks:
app-network:
driver: bridge

5. Install Dependencies and Build the Applications

# Backend

Navigate to the backend directory, install dependencies, and start the backend server:

cd backend
npm install
npm start

# Frontend

Navigate to the frontend directory, install dependencies, and start the frontend server:

First, run the development server:

cd frontend
npm install
npm run dev

6. Build and Run the Containers
   To build and start the Docker containers, run the following command at the root of the project:

docker-compose -f docker-compose-dev.yml up --build

This command will:

Build the Docker images for the backend and frontend.
Start the containers for the backend, frontend, and MongoDB database.
Configure the Docker network to allow communication between the containers.

7. Access the Application
   Once the containers are up and running, you can access the application:

Frontend: http://localhost
Backend: http://localhost:3000
MongoDB: Accessible via MongoDB Compass or any other MongoDB client at mongodb://localhost:27017

8. Stop the Containers
   To stop and remove the containers, run the following command:

docker-compose -f docker-compose-dev.yml down
