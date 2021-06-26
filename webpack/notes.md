# Webpack

## Introducción

- Qué es?
  - Herramienta para preparar código a producción
  - permite trabajar con archivos estáticos
  - permite tener un modo de desarrollo
  - se origina en el 2012
  - Permite trabajar de forma modular
- Conceptos básicos
  - paquete de módulos estáticos
  - construye un grafico de dependencias que mapea cada módulo para convertirlo en uno o más módulos
  -** Entry (punto de entrada):** este le indica a webpack cual modulo de JavaScript debe de usar para empezar a crear una salida.
    - Ejemplo : index.js.
  - **Output (punto de salida):** Este archivo es el bundle o nuestro archivo de salida, seria nuestra caja donde empaquetamos toda nuestra aplicación, normalmente este archivo final se crea en una carpeta llamada dist.
  - **Loader (transformador):** Los loaders lo que hacen es decirle a webpack como tiene que transformar el código de un modulo en concreto. 
    - Ejemplo : Los loaders pueden transformar ficheros a JavaScript, o cargar CSS directamente en archivos JS
    - **Plugins (complementos):** Nos van a ayudar a extender las funcionalidades con los loaders, añadir otras configuraciones. 
      - Ejemplo : hay un modulo llamado HTMLWebpackPlugin que este se encarga de crear un HTML personalizado que le inyecta todos los bundles finales que compilamos.

## Proyecto Inicial

- Creamos una carpeta e ingresamos a esta.

  ```
  mkdir curso-webpack
  cd curso-webpack
  ```
- Inicializamos nuestro repositorio con git

  ```
  git init
  ```
-  inicializar nuestro proyecto con npm

  ```
  npm init -y
  ```
- La carpeta SRC es el source de todo el proyecto ( index.js , imágenes, utils, assets, helpers, database, etc).
- Instalar Webpack
  - npm

    ```
    npm i webpack webpack-cli -D
    ```
  - yarn

    ```
    yarn add webpack webpack-cli -D
    ```
- Y luego ejecutamos webpack. npx lo que hace es ejecutar paquetes directamente de npm, este viene instalado de npm

  ```
  npx webpack
  ```
- Al hacer esto webpack creo una carpeta llamada dist. Este optimiza el código de js de la app.

  ![](images/00.PNG)

  ![](images/01.PNG)

- Por defecto webpack al compilar nuestro proyecto setea el modo “production” implícitamente pero podemos definirle el modo explícitamente corriendo:

  ```
  npx webpack --mode production
  npx webpack --mode development
  ```
- La diferencia radica que el modo development deja el código mas legible para los desarrolladores pero con comentarios, el modo production deja el código comprimido y mas limpio para usarse.
- Configuración de `webpack.config.js`
  - entry: punto de entrada de la aplicación
  - 