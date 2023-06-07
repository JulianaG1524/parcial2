# Ejecución del proyecto

Para ejecutar este proyecto, sigue los pasos a continuación:

1. Haz un fork de este repositorio.

2. Clona el repositorio en tu máquina local.

3. Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias: 'npm install'

4. Asegúrate de que el backend esté en funcionamiento y tenga las CORS habilitadas en el puerto 2000.

5. Ejecuta el siguiente comando para iniciar la aplicación: 'npm start'. Esto abrirá la aplicación en tu navegador en la dirección http://localhost:3000.

# Proceso de desarrollo

El proceso de desarrollo del proyecto se dividió en varias etapas:

1. Página de inicio de sesión: Se creó un componente para la página de inicio de sesión, utilizando la librería Axios para realizar peticiones POST al backend y verificar las credenciales del usuario. En caso de que las credenciales sean inválidas, se muestra un mensaje de error.

2. Componente Book: Se creó el componente Book, que forma parte de la página principal de la aplicación. Este componente se divide en dos secciones: la lista de libros y el detalle de un libro seleccionado. Se utilizó la librería Bootstrap para estilizar los componentes.

3. Rutas y navegación: Se utilizó la librería react-router-dom para definir las rutas de la aplicación y facilitar la navegación entre las páginas de inicio de sesión y los libros. Esto se logró mediante el uso de los componentes BrowserRouter, Switch, Route y Link.

4. Internacionalización: Se implementó la internacionalización utilizando la librería react-intl, lo que permite que la aplicación admita los idiomas inglés y español.

5. Gestión del rol de usuario: Se utilizó el objeto sessionStorage para almacenar el rol del usuario que inicia sesión. Esto permite que la aplicación muestre los campos de texto relevantes en el detalle de un libro según el rol del usuario.