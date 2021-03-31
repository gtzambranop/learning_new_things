# Experiencias

## contenedor MYSQL para resolver ejercicios SQL

- Debía tener los archivos locales y los del contenedor vinculados, por lo que al momento de crear el contenedor agregué la ruta local y la de destino en el contenedor

  ```bash
  docker run --name sql -e MYSQL_ROOT_PASSWORD=secret -v $(pwd):/home -d mysql:5.7
  ```
- para modificar archivos en el contenedor, isntalé vim en este usando:

  ```bash
  apt-get update
  apt-get install vim
  ```
- Para correr los scripts `.sql` utilicé
  ```bash
  mysql -u root -p < solution.sql
  ```
- para acceder al entorno mysql uso
  ```bash
  mysql -h localhost -u root -psecret
  ```
- Lista de comandos útiles de mysql [link](http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm)

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