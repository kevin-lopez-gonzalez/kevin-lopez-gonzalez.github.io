import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kevin Lopez Gonzalez",
  author: "Kevin Lopez Gonzalez",
  description:
    "Desarrollador freelance en Antofagasta. Creo soluciones digitales a medida para microempresas y pymes: sistemas simples, automatización y reportes que te ayudan a ordenar tu negocio y ahorrar tiempo. Trabajo de forma independiente, con precios accesibles y disponibilidad parcial.",
  lang: "es",
  siteLogo: "/kevin-small.jpg",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    //{ text: "Proyectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/kevin-lopez-gonzalez-a26378149/" },
    { text: "Github", href: "https://github.com/segad82" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://kevin-lopez-gonzalez.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Kevin Lopez G.",
    specialty: "Soluciones Informáticas",
    summary: `Desarrollador freelance en Antofagasta.
              Creo soluciones digitales a medida para microempresas y pymes: sistemas simples, automatización y reportes que te ayudan a ordenar tu negocio y ahorrar tiempo.
              Trabajo de forma independiente, con precios accesibles y disponibilidad parcial.
              ¿Necesitas una solución práctica? 🧑🏻‍💻📈`,
    email: "kevin.lopez.gonzalez.it@gmail.com",
    number: "56984452859",
    cv: '/CV.pdf'
  },
  experience: [
    {
      company: "Holos Consulting",
      position: "Consultor",
      startDate: "Sep 2023",
      endDate: "Actualmente",
      summary: [
        "Reportes HSE para importante cliente minero: automatización de informes periódicos y “spot” de seguridad, generando vistas detalladas y resumidas por rol y unidad, según criterios de business partners, para identificar tendencias y optimizar la toma de decisiones.",
      ],
    },
    {
      company: "FLSmidth S.A.",
      position: "IT Operations",
      startDate: "Abr 2019",
      endDate: "Sept 2023",
      summary: [
        "Elaboración integral de reportes: diseño y optimización de consultas SQL sobre el data warehouse en Snowflake y construcción de paneles e informes en Power BI. (Anteriormente, desarrollé procesos ETL en SSIS para transferir datos a una instancia de SQL Server en Azure.)",
        "Automatización de integración ERP–DTE: desarrollo de un script en Python que conecta el ERP con el validador de Documentos Tributarios Electrónicos, eliminando tareas manuales y reduciendo errores.",
        "Mejora y mantenimiento de sistema de inventario: adaptación de una aplicación en PHP/MySQL, añadiendo nuevas funcionalidades y gestionando su control de versiones con GIT."
      ],
    },
    {
      company: "Plataforma Tecnológica",
      position: "Desarrollador Junior",
      startDate: "Ene 2013",
      endDate: "Dic 2013",
      summary: [
        "Desarrollo de software cliente-servidor desde cero: participé en todas las fases de creación de una aplicación de escritorio en C#, diseñada bajo patrón MVC, implementada con WPF y respaldada por SQL Server.",
        "Colaboración en la generación de reportes: elaboré y optimicé consultas SQL para la obtención de datos en múltiples sistemas, mejorando la precisión y eficiencia de los informes."
      ]
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hola! soy Kevin, un informático apasionado por transformar datos y procesos en herramientas digitales efectivas.
      Con experiencia en desarrollo de sistemas a medida en JavaScript y C#, así como en la creación de informes avanzados con Power BI y la automatización de procesos con Python, me muevo en la intersección entre la eficiencia operativa y la innovación tecnológica.
      Durante mi trayectoria he tenido la oportunidad de realizar ETL's en SSIS, integrar datos de Snowflake, ampliar funcionalidades de proyectos existentes en PHP y construir proyectos desde cero en Node.js, siempre asegurando usabilidad, escalabilidad y continuidad del negocio.
    `,
    image: "/kevin-big.jpg",
  },
};

// #5755ff
