# Docker

```bash
docker run -d -p 80:80 docker/getting-started
```

- `-d` ejecutar el contenedor en modo separado (segundo plano)
- `-p 80:80` mapea el puerto 80 del host al puerto 80 en el contenedor
- `docker/getting-started` imagen a usar

Se pueden combinar banderas:

```bash
docker run -dp 80:80 docker/getting-started
```

## ¿Qué es un contenedor?

Es un proceso en su máquina que ha sido aislado de todos los demás procesos en la máquina host. Ese aislamiento aprovecha los espacios de nombres del kernel y los cgroups, características que han estado en Linux durante mucho tiempo. Docker ha trabajado para hacer que estas capacidades sean accesibles y fáciles de usar.

## ¿Qué es una imagen de contenedor?

Cuando se ejecuta un contenedor, utiliza un sistema de archivos aislado. Este sistema de archivos personalizado lo proporciona una imagen de contenedor. Dado que la imagen contiene el sistema de archivos del contenedor, debe contener todo lo necesario para ejecutar una aplicación: todas las dependencias, configuración, scripts, binarios, etc. La imagen también contiene otra configuración para el contenedor, como variables de entorno, un comando predeterminado para ejecutar, y otros metadatos.

Más adelante profundizaremos en las imágenes, cubriendo temas como capas, mejores prácticas y más.

# Aplicación de muestra

Para el resto de este tutorial, trabajaremos con un administrador de lista de tareas simple que se ejecuta en Node.js.

## Obtener la aplicación

```bash
git clone https://github.com/docker/getting-started.git
```

copiar la carpeta `app/`

## Cree la imagen del contenedor de la aplicación

Para construir la aplicación, necesitamos usar un Dockerfile. Un Dockerfile es simplemente un script de instrucciones basado en texto que se utiliza para crear una imagen de contenedor.

1. Cree un archivo llamado Dockerfile en la misma carpeta que el archivo package.json con el siguiente contenido.

```bash
FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```
2. Abra una terminal y vaya al directorio de la aplicación con el Dockerfile. Ahora cree la imagen del contenedor con el comando docker build.

```bash
docker build -t getting-started .
```

Este comando usó el Dockerfile para crear una nueva imagen de contenedor. Es posible que haya notado que se descargaron muchas "capas". Esto se debe a que le indicamos al constructor que queríamos comenzar desde el nodo: imagen 12-alpine. Pero, como no teníamos eso en nuestra máquina, era necesario descargar esa imagen.

Después de descargar la imagen, copiamos en nuestra aplicación y usamos hilo para instalar las dependencias de nuestra aplicación. La directiva CMD especifica el comando predeterminado que se ejecutará al iniciar un contenedor desde esta imagen.

Finalmente, la bandera -t etiqueta nuestra imagen. Piense en esto simplemente como un nombre legible por humanos para la imagen final. Como nombramos a la imagen Getting started, podemos hacer referencia a esa imagen cuando ejecutamos un contenedor.

El . al final del comando docker build indica que Docker debe buscar el Dockerfile en el directorio actual.

## Iniciar un contenedor de aplicaciones

1. Inicie su contenedor usando el comando docker run y especifique el nombre de la imagen que acabamos de crear:

```bash
docker run -dp 3000:3000 getting-started
```
Estamos ejecutando el nuevo contenedor en modo "separado" (en segundo plano) y creando un mapeo entre el puerto 3000 del host y el puerto 3000 del contenedor. Sin el mapeo de puertos, no podríamos acceder a la aplicación.

2. Abra su navegador web en http: // localhost: 3000. ¡Deberías ver nuestra aplicación!
```bash
```
```bash
```