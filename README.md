Para ejecutar el proyecto es necesario hacer lo siguiente:

1) Descargar el proyecto: para esto ejecutamos el siguiente comando en consola de la carpeta que queramos:
    git clone https://github.com/Germanblandin1/AgenciaBuses.git

2) Instalar y Arrancar el Backend
    -Primero debemos instalar la version mas reciente de python 3 y pip (por lo general ya viene con python 3)
        En este caso se uso Python 3.7.2 y pip 18.1 
        https://www.python.org/downloads/

    -Primero nos ubicamos en la carpeta del proyecto (donde veamos el archivo manage.py) en este caso en la carpeta:
        AgenciaDeBuses
    -Instalamos las dependencias con el comando:
        pip install -r requirements.txt
    -Migramos e Inicializamos la base de datos
        python manage.py migrate
    -Finalmente ejecutamos el servidor
        python manage.py runserver
    -EL servidor quedara ejecutandose en 
        http://localhost:8000
    -Si queda en una direccion distinta usar la que se indique
    -Para visualizar el admin de Django Rest Framework es necesario realizar alguna solicitud a algun recurso como por ejemplo:
        http://localhost:8000/pasajeros/
    -Listo

3) Instalar y Arrancar el Frontend
    -Para ejecutar el front necesitamos instalar la version recomendada de Node.js. En este caso
     La version 10.15.0 y npm 6.4.1 (viene con la instalacion de node.js)
        https://nodejs.org/es/
    -Nos ubicamos en la carpeta AgenciaFront/AgenciaFront, checamos que exista los archivos package y package-lock
    -Ejecutamos el comando
        npm install
    - Una vez terminado ejecutamos el servidor
        npm run start
    - El servidor quedara ejecutandose en 
        http://localhost:8080/
    -Si queda en una direccion distinta usar la que se indique
    -Vamos al navegador y colocamos nuestro url:
        http://localhost:8080/
    - En este punto ya deberiamos ser capaces de visualizar la apliacion.


