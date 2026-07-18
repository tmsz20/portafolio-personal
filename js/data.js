/************************************
 * CONFIGURACION DE PROYECTOS
 * 
 * Aca agregas tus proyectos. Cada proyecto
 * es un objeto con title, description, 
 * technologies, demoLink y repoLink.
 * 
 * Cuando agregues uno nuevo, solo copia
 * el formato y listo.
 ************************************/

const projects = [
    {
        id: 1,
        title: "Gestor de Gastos",
        description: "PWA instalable en iPhone para gestionar finanzas personales. Permite definir un presupuesto mensual basado en sueldo y día de cobro, registrar gastos por categoría (comida, transporte, entretenimiento, etc.), y recibir alertas inteligentes cuando ciertos gastos superan el 50% del presupuesto diario. Funciona 100% offline gracias a una base de datos local.",
        technologies: ["React 19", "TypeScript", "Zustand", "Dexie", "Vite"],
        demoLink: "#",
        repoLink: "#",
        featured: true
    },
    {
        id: 2,
        title: "1337tech E-commerce",
        description: "Tienda de electrónica desarrollada como proyecto del curso de frontend. Incluye catálogo de productos con cards interactivas, sección de reseñas y carrito de compras funcional con persistencia en LocalStorage. Diseño responsive pensado para desktop y mobile.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
        demoLink: "https://tmsz20.github.io/Pre-entrega-pagina-web-ecommerce/",
        repoLink: "https://github.com/tmsz20/Pre-entrega-pagina-web-ecommerce",
        featured: true
    },
    // Aca podes agregar mas proyectos. Ejemplo:
    // {
    //     id: 3,
    //     title: "Proximo Proyecto",
    //     description: "Descripcion del proyecto...",
    //     technologies: ["React", "CSS"],
    //     demoLink: "#",
    //     repoLink: "#",
    //     featured: false
    // }
];
