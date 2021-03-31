# Comándos útiles

- Ver imágenes instaladas

  ```bash
  docker images
  ```
- Descarga una imagen A

  ```bash
  docker pull A
  ```
- buscar imágenes en terminal

  ```bash
  dokcer search A
  ```
- Ejecutar de forma interactiva el contenedor A

  ```bash
  docker run -i A bash
  ```
- Salir del entorno interactivo

  ```bash
  Ctrl + d
  ```
- Ver lista de contenedores en ejecución

  ```bash
  docker ps
  ```
- Ver historial de contenedores que han sido parados

  ```bash
  docker ps -a
  ```
- Eliminar del historial a un contenedor

  ```bash
  docker rm A_id
  docker rm A_name
  ```
- Reiniciar contenedor inactivo

  ```bash
  docker start A_id
  docker start A_name
  ```
- Detener contenedor en ejecución

  ```bash
  docker stop A_id
  docker stop A_name
  ```
- Tomar el puerto del contenedor y hacerlo accesible en un puerto del computador `local_port:container_port`

  ```bash
  docker run -p 3000:80 A
  ```
- Ejecutar contenedor en segundo plano

  ```bash
  docker run -d A
  ```
- Eliminar todos los contenedores pasandole la lista de sus ids

  ```bash
  docker rm $(docker ps -a)
  ```
- Detener y eliminar contenedores en ejecución

  ```bash
  docker rm $(docker ps -a) -f
  ```
- Detener todos los contenedores en ejecución

  ```bash
  docker stop $(docker ps -aq)
  ```
- Crear un contenedor accesible desde múltiples puertos

  ```bash
  docker run -p 3000:80 -p 4000:80 A
  ```
- Crear un contenedor con nombre personalizado

  ```bash
  docker run -d -p 3000:80  --name name_container A
  ```
- Formatear descripción de contenedores desde consola

  ```bash
  docker ps --format="ID\t{{.ID}}"
  ```
  útil para ver la IP

  ```bash
  docker inspect --format='{{range .NetworkSettings.Networks}}{{println .IPAddress}}{{end}}' A
  ```
- Eliminar una imagen

  ```bash
  docker rmi A_id
  docker rmi A_name
  ```
- Eliminar todas las imagenes

  ```bash
  docker rmi $(docker images -aq)
  ```
- Crear contenedor y copiar datos locales a este

  ```bash
  docker run -d -p 80:80 --name name_container -v local/route:container/route A
  ```
- Ejecutar bash de forma interactiva con un contenedor específico

  ```bash
  docker exec -it name_container bash
  ```
- Crear una imagen en el repositorio actual

  ```bash
  docker build -t name_image .
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```