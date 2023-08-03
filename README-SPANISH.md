# TaskManagerApplication Frontend - Desarrollado con Angular
¡Bienvenido al frontend de TaskManagerApplication! Aquí encontrarás una experiencia de usuario intuitiva y atractiva gracias a las tecnologías y librerías que se ha utilizado. El objetivo es brindarte una aplicación de administración de tareas fácil de usar y visualmente agradable. A continuación, te presento los detalles de nuestra implementación en Angular.

## Tecnologías y librerías utilizadas
He aprovechado diversas tecnologías y librerías para crear una interfaz moderna y amigable:

- **Angular**: El frontend está desarrollado con Angular, un potente framework que nos permite crear aplicaciones web dinámicas y robustas.
- **Bootstrap**: Utilice Bootstrap para lograr un diseño responsivo y elegante. Esto me ayuda a que la aplicación se adapte a diferentes dispositivos y tamaños de pantalla.
- **Angular Animations**: Implemente animaciones para mejorar la experiencia de usuario y hacer que la interacción con la aplicación sea más agradable y fluida.
- **Font Awesome**: Para los iconos, he incorporado Font Awesome, que ofrece una amplia variedad de íconos para mejorar la estética y la usabilidad de la aplicación.
- **RxJS**: Usé RxJS para trabajar con flujos de datos asíncronos y manejar eventos de manera eficiente.
- **ngx-toastr**: Implemente ngx-toastr para mostrar notificaciones y mensajes de una forma elegante y no intrusiva, mejorando la comunicación con el usuario.

## Características destacadas

### 1. Login y Registro seguros
Para garantizar la seguridad y proteger la privacidad de los usuarios, he implementado un sistema de autenticación basado en tokens. Cuando un usuario se registra o inicia sesión, se le proporciona un token que se almacena en el LocalStorage. Este token se utiliza para autenticar al usuario en cada solicitud, asegurando que solo los usuarios autorizados puedan acceder a la aplicación.

### 2. Auth de Routings
He implementado un sistema de autenticación de rutas (routing guards) para restringir el acceso a ciertas páginas de la aplicación a usuarios no autenticados. Si un usuario intenta acceder a una página protegida sin estar logueado, será redirigido automáticamente a la página de inicio de sesión.

### 3. Interfaz intuitiva y atractiva
Me he esforzado en diseñar una interfaz de usuario intuitiva y atractiva. Los componentes y elementos visuales están cuidadosamente diseñados para facilitar la navegación y brindar una experiencia agradable al usuario.

### 4. Animaciones suaves
He incorporado animaciones suaves para enriquecer la interacción del usuario con la aplicación. Las animaciones se aplican en transiciones de página, botones y otros elementos clave para hacer que el uso de la aplicación sea más atractivo.

## Instrucciones de uso
Para utilizar TaskManagerApplication frontend, sigue estos pasos:

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona este repositorio en tu máquina local.
3. Navega a la carpeta del proyecto e instala las dependencias ejecutando npm install.
4. Ejecuta ng serve para iniciar el servidor de desarrollo.
5. Abre tu navegador y visita http://localhost:4200 para ver la aplicación en acción.

## Contribuye
Me gustaria recibir contribuciones de la comunidad. Si encuentras problemas, tienes ideas de mejora o deseas agregar nuevas características, ¡estare encantado de recibir tus Pull Requests!

## Soporte
Si tienes preguntas, problemas o comentarios, no dudes en contactarme a través del repositorio de GitHub.

¡Gracias por elegir TaskManagerApplication frontend! Espero que disfrutes utilizando nuestra aplicación para administrar tus tareas de manera eficiente y organizada.

