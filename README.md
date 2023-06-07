# Ejecución del proyecto

Para ejecutar este proyecto, sigue los pasos a continuación:

1. Haz un fork de este repositorio.

2. Clona el repositorio en tu máquina local.

3. Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias: 'npm install'

4. Asegúrate de que el backend esté en funcionamiento y tenga las CORS habilitadas en el puerto 2000.

5. Ejecuta el siguiente comando para iniciar la aplicación: 'npm start'. Esto abrirá la aplicación en tu navegador en la dirección http://localhost:3000.

# Proceso de desarrollo

El proceso de desarrollo inició con la pagina de Login para la cual solo se crea un componente que será la pagina completa debido a que no hay componentes más pequeños que se deban reutilizar, por otra parte se utiliza la librería axios para hacer las peticiones post al back con el fin de saber si el usuario tiene acceso o no a la aplicación, si el back devuelve un error mostramos un mensaje de error de credenciales invalidas.
El siguiente gran componente que se crea y al que se accede luego de un login correcto es Book el cual está formado por 2 componentes más pequeños que son Book y BookDetail. Para el componente Books se utiliza una disposición dividida en 3 partes iguales donde la lista de libros conforma los primeros 2/3 y el detail el sobrante 1/3. Para la parte de la lista de libros se utiliza un componente nuevo que es una tarjeta de Bootstrap, se decide utilizar un componente aparte para cada libro porque de esta manera el código puede ser mantenible y cuando se deseen hacer ajustes solo a la tarjeta podemos dirigirnos directamente al componente, esto de manejar otro componente se hace también para el detail y también se utiliza un card de Bootstrap. De la misma manera que en el Login se usa la librería axios para hacer las peticiones, directamente al acceder a los libros se hace una petición al back para obtener la lista y de esta manera crear los componentes Book al lado izquierdo, al presionar uno de estos componentes se hace una nueva petición utilizando el id del libro seleccionado para ver el detail de este libro. 
En el proyecto se hace uso de rutas de la librería react-router-dom para el acceso a los componentes de Login y Books, de esta manera también aseguramos que al iniciar la aplicación siempre se inicie con el Login y cuando este se haga exitosamente podamos acceder a los libros. Por otra parte, también utilizamos react-intl para la internacionalización soportando los idiomas inglés y español. Por último, se utiliza el sessionStorage para conocer el rol del usuario que inicia sesión y de esta manera saber como se mostrarán los campos de texto del Detail.
