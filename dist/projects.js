const projects = [
  {
    id: 1,
    name: 'App de Películas y Series',
    image: 'app-movies.jpg',
    estado: 'Finalizado',
    tech: ['HTML', 'SCSS', 'JS', 'React'],
    description: 'He creado una aplicación web con React utilizando la API de The Movie Database (TMDb) para mostrar una amplia variedad de películas y series, con detalles técnicos y su reparto.  En el caso de las series, también se incluye información sobre la cantidad de temporadas y episodios de cada una. La aplicación también ofrece recomendaciones de contenido relacionado. Además, he incluido el registro de usuario y un sistema de almacenamiento para que los usuarios puedan guardar películas y series en "ver más tarde" usando localstorage y el inicio de sesión se realiza mediante sessionStorage.',
    github: 'https://github.com/JeseMedina/App-Movies-and-Series',
    web: 'https://incomparable-dasik-ce9303.netlify.app/',
  },
  {
    id: 2,
    name: 'Panaderia',
    image: 'panaderia.jpg',
    estado: 'Finalizado',
    tech: ['HTML', 'CSS', 'JS', 'jQuery', 'PHP', 'MySql'],
    description: 'Esta aplicación web de panadería fue desarrollada en equipo y permite al personal de la panadería tener un control total de su negocio. Desde la gestión de ventas a clientes o consumidor final, compras a proveedores, producción de pan y reparto, hasta el control del stock y el flujo de dinero. La aplicación permite al administrador crear diferentes tipos de usuarios con diferentes permisos para acceder a diferentes secciones de la aplicación, lo que garantiza la seguridad y privacidad de los datos de la empresa. La gestión del stock, la producción y el reparto ayuda a la panadería a optimizar su proceso y asegurarse de que siempre tengan suficiente inventario.',
    github: 'https://github.com/JeseMedina/Panaderia'
  },
  {
    id: 3,
    name: 'HotFood',
    image: 'hotfood.jpg',
    estado: 'falta terminar',
    tech: ['HTML', 'CSS', 'JS', 'jQuery', 'PHP', 'MySql'],
    description: 'Esta aplicación web de restaurante ofrece a los usuarios una forma fácil y conveniente de acceder a nuestro menú completo y con un simple registro hacer pedidos desde cualquier lugar. Por otro lado, los administradores del restaurante tendrán acceso a una lista completa de los clientes registrados y sus pedidos. Esto permitirá al equipo del restaurante tener un control completo sobre los pedidos entrantes, procesarlos y hacer entregas oportunas.',
    github: 'https://github.com/JeseMedina/HotFood',
    web: 'https://medinajese.000webhostapp.com/login.html'
  },
  {
    id: 4,
    name: 'Mercado',
    image: 'mercado.jpg',
    estado: 'Finalizado',
    tech: ['Java'],
    description: 'Esta aplicación de escritorio para mercado cuenta con dos perfiles: vendedor y administrador. Los vendedores pueden vender a consumidores finales y clientes registrados, abrir y cerrar caja y controlar el flujo de dinero en su caja. Los administradores, por su parte, pueden crear perfiles de vendedores, realizar compras a proveedores, generar reportes de ventas, compras y flujo de caja, y agregar productos y categorías. Con la capacidad de guardar información sobre los productos, los administradores pueden mantener un inventario actualizado y organizado.',
    github: 'https://github.com/JeseMedina/Mercado',
  },
  {
    id: 5,
    name: 'Memoria de Bob Esponja',
    image: 'bob-esponja.jpg',
    estado: 'Finalizado',
    tech: ['HTML', 'CSS', 'JS'],
    description: 'Esta página web es un juego de memoria de Bob Esponja. Es un juego sencillo pero divertido, consiste en encontrar las parejas de cartas con imágenes de los personajes de Bob Esponja en el menor numero de intentos posible.',
    github: 'https://github.com/JeseMedina/Juego-Memoria-Bob-Esponja',
    web: 'https://jesemedina.github.io/Juego-Memoria-Bob-Esponja/',
  }, {
    id: 6,
    name: 'Portafolio',
    image: 'portafolio.jpg',
    estado: 'Finalizado',
    tech: ['HTML', 'SCSS', 'JS', 'React'],
    description: 'Mi portafolio permite presentarme. Ofrezco una breve descripción sobre mi formación académica y cursos realizados, destacando mis habilidades y conocimientos técnicos. También incluyo una sección dedicada a los proyectos que he desarrollado, donde muestro mis habilidades en programación y diseño de sitios web, aplicaciones. Pueden descargar mi currículum y ponerse en contacto conmigo a través de varias opciones, incluyendo formulario de contacto.',
    github: 'https://github.com/JeseMedina/Portfolio'
  },
];

export default projects;