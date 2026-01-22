//Configuración del sitio
export const siteConfig = {
  title: "Portafolio Personal",
  description: "Mi portafolio personal desarrollado con Astro",

  //Links de navegación
  navigation: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
  },

  //Sección Hero
  hero: {
    title: "Bienvenido a mi portafolio",
    subtitle: "Hola soy José, un desarrollador web apasionado",
    intro: "Explora mis proyectos y habilidades",
  },

  //Sección Sobre mí
  about: {
    title: "Sobre mí",
    description:
      "Hola, soy José, un desarrollador web. Me gusta " +
      "explorar nuevas tecnologías. " +
      "En este portafolio encontrarás mis proyectos ",
    skills: ["JavaScript", "HTML", "CSS", "React", "Python", "Astro"],
    image: "./image/img.png",
  },

  //Sección Proyectos
  projects: {
    title: "Proyectos Destacados",
    text: "Aquí hay algunos de mis proyectos recientes.",
    items: [
      {
        name: "TravesiaMexa",
        description: "Proyecto de viajes por México.",
        link: "https://github.com/jose/travesiamexa",
      },
      {
        name: "MicroInfo",
        description: "Sistema de información de rutas de transporte público.",
        link: "https://github.com/jose/microinfo",
      },
      {
        name: "FoodTruck",
        description: "Aplicación para gestionar food trucks.",
        link: "https://github.com/jose/foodtruck",
      },
      {
        name: "Gestor de turnos",
        description: "Sistema para gestionar turnos.",
        link: "https://github.com/jose/gestor-turnos",
      },
    ],
    projectList: ["TravesiaMexa", "MicroInfo", "FoodTruck", "Gestor de turnos"],
  },

  //Sección Contacto
  contact: {
    title: "Ponte en contacto",
    description: "¿Tienes un proyecto en mente? ¡Hablemos!",
    email: "jose@example.com",

    info: {
      email: {
        label: "Correo Electrónico",
        value: "correo@example.com",
        link: "mailto:correo@example.com",
      },
      phone: {
        label: "Teléfono",
        value: "+52 123 456 7890",
        link: "tel:+521234567890",
      },
    },

    socialmedia: {
      links: [
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/xAugeLinux" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://linkedin.com/in/jose" },
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://twitter.com/jose" },
      ],
    },
  },

  //Footer
  footer: {
    text: "© 2024 José. Todos los derechos reservados.",
    github: {
      text: "Ver mi GitHub",
      url: "https://github.com/jose",
    },
  },
};
