# Popcorn Tasters: A Movies Reviews App
Mobile Web App Link: https://popcorntasters-app.netlify.app/
Mobile app: Download and install Apk provided in this repo

Aplicación enfocada para clientes con dispositivos móviles, desarrollada usando Ionic & Angular.

Es una aplicación similar a Rotten Tomatoes.

Proyecto No. 1 - Programación de Dispositivos Móviles, Universidad Rafael Urdaneta, período 2022-A.

Desarrolladores: Figueroa Alonso, C.I. V-28536894 y Muchacho Ricardo, C.I. V-27849052.

---

## **Descripción del proyecto:**


### *1. LOGO*:
![imagen](https://user-images.githubusercontent.com/65868683/163551114-aa726afe-529e-441a-abb9-77df2651df59.png)


### *2. Funciones*:
#### 2.1. General
- Registro de usuario.
- Inicio de sesión y cierre de sesión.
 
#### 2.2. Visualización
- Películas más populares del momento situadas en el dashboard.
- La descripción de una película está dentro del perfil de la misma:
    - Sus imágenes.
    - Tráilers.
    - Ratings más valiosos (ó los últimos ratings).
    - Comentarios.			
                    
#### 2.3. Capacidades de un usuario registrado en la aplicación (un usuario puede...)
 - Dar rating a cualquier película (afectando el rating general de la misma).
 - Comentar sobre una película.
 - Votar si una crítica ajena le resulta útil o no (sin afectar el rating general de la película).
 - Buscar películas por nombre, por género y por año de publicación.
 - Poseer un perfil editable, donde puede cambiar sus datos personales y sus datos visibles para otros usuarios.
 - Añadir un top de películas.
 - Agregar un listado con los últimos ratings del usuario y comentarios añadidos.


### *3. Herramientas ulitizadas para su desarrollo*:
 - IDE (Entorno de Desarrollo Integrado): *Visual Studio Code*.
 - DVCS (Control de Versiones Distribuido): *Git* y la plataforma de *GitHub*.
 - Frontend: *Angular* y *Ionic*.
 - Backend (API): *Node.js* y *Express.js* framework.
 - DBMS (Sistema de Gestión de Base de Datos): *MongoDB*.
 - REST Client: *Postman API Platform*.
 - PaaS (Plataforma como servicio): *Heroku*.


### *4. Instrucciones para usar la aplicación*:
 El servidor se encuentra en la nube, por lo que descargando el Android Package (.apk) es suficiente para hacer uso de la aplicación en cualquier dispositivo móvil.

 En caso de preferir correr y usar la app localmente, es recomendable hacer un clon del repositorio presente, usando Git, introduciendo en Git Bash lo siguiente: 
 `git clone https://github.com/alonfigue/popcorntasters.git`

 1. Desde la consola, situarse en la carpeta "frontend", y usar el comando `npm i` para instalar las dependencias (pero antes, asegurarse de tener instalado Node.js).
 2. Luego, desde la misma carpeta, usar el comando `npm install -g @ionic/cli` para instalar la Interfaz de Línea de Comandos (CLI) de Ionic globalmente.
 3. Por último, para correr la aplicación, en la misma carpeta, desde la consola, insertar `ionic serve`.


### *5. Además...*
Puedes revisar el [repositorio que contiene el código del backend.](https://github.com/RicardoMuchacho/popcorntasters-api)
