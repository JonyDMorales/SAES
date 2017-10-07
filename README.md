#SAES

## Build and code SAES

Prerequisites:

 * Download ans install [**Node-js 8.1.4 or later**](https://nodejs.org/es/download/) and install it.
 * Download ans install [**Typescript 2.4 or later**](http://www.typescriptlang.org/) and install it.
 
 To start coding and build

 * Clone this repository
 
 * Install dependencies
 
  ```bash
 saes$ npm install
 ```
 * Compile Project
 
  ```bash
 saes$ tsc
 ```
 
 * Rename .env.example file to .env
 
 * Run Project
 
  ```bash
 saes$ npm start
 ```
 
 * Navigate to 'http://localhost:8080'
 
 
 ## Project Structure

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Directorio donde se guarda el proyecto compilado                                              |
| **src**                  | Directorio que contiene el código de todo el proyecto                                         |
| **src/controllers**      | Directorio para los controladores (maneja todo lo relacionado con las peticiones)             |
| **src/models**           | Directorio que contiene los modelos de mongo db                                               |
| **src/views**            | Vistas de la aplicación hechas con pug template (Front-end)                                   |
| **src**/server.ts        | Express app                                                                                   |
| .env.example             | Variables del proyecto                                                                        |
| tsconfig.json            | Opciones de configuración para TypeScript                                                     |