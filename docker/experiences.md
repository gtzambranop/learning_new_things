# Experiencias

## contenedor MYSQL para resolver ejercicios SQL

- Creo la imagen con base al `Dockerfile` usando:

  ```bash
  docker build -t gtzambranop/sql_scripts .
  ```

DockerFile:

  ```bash
	FROM mysql:5.7
	WORKDIR /home/sql/
	COPY . .
	RUN ["apt-get", "update"]
	RUN ["apt-get", "install", "-y", "vim"]
  ```

- Debía tener los archivos locales y los del contenedor vinculados, por lo que al momento de crear el contenedor agregué la ruta local y la de destino en el contenedor

  ```bash
  docker run --name sql -e MYSQL_ROOT_PASSWORD=secret -v $(pwd):/home/sql -d gtzambranop/sql_scripts
  ```
- para modificar archivos en el contenedor, isntalé vim en este usando:

  ```bash
  apt-get update
  apt-get install vim
  ```

	Esto lo agregué también al Dockerfile
- Para acceder al bash del contenedor uso

  ```bash
	docker exec -it sql bash
  ```
- para acceder al entorno mysql uso
  ```bash
  mysql -h localhost -u root -psecret
  ```
- Para correr los scripts `.sql` utilicé
  ```bash
  mysql -u root -p < solution.sql
  ```
- Lista de comandos útiles de mysql [link](http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm)

### Push - Docker Hub

- Ingreso a docker hub
  ```bash
	docker login
  ```
- Creo una imagen a partir del contenedor

  ```bash
	docker commit sql gtzambranop/sql_scripts
  ```
	Esto reemplaza la imagen vieja

- Subo la imagen a docker hub

  ```bash
	docker push gtzambranop/sql_scripts
  ```
	Esto genera una nueva versión del repositorio
## Arquitectura Software

1. En Docker Hub, ya debemos tener vinculada nuestra cuenta con la de GitHUb
2. Creamos nuestro repositorio en github
3. Si el repositorio está en una organización, ir a [settings](https://github.com/settings/applications) y en Authorized OAuth Apps, seleccionamos docker, y clickeamos **Grant** en la organización.
4. Creamos repositorio vacío en Docker Hub
5. Vamos a la opcion **Builds** y vinculamos el repositorio de Docker Hub con el de Github
6. Trabajamos y al momento de hacer commit en Github, Docker Hub genera una imagen
  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```

  ```bash
  ```