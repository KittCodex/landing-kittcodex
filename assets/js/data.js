/* Contenido del sitio */
const DATA = {
  /* ---------- 1. Propuesta de valor ---------- */
  valueProps: [
    { icon: "icon-palette", title: "Diseño a medida", desc: "Interfaces pensadas para tu marca y tus clientes. Nada de plantillas genéricas." },
    { icon: "icon-gauge", title: "Rendimiento real", desc: "Velocidad de carga sobresaliente. La experiencia importa para Google y para tus visitantes." },
    { icon: "icon-devices", title: "Responsive total", desc: "Se ve impecable en celulares, tablets y computadoras." },
    { icon: "icon-target", title: "Enfocada en conversión", desc: "Estructura, textos y llamadas a la acción orientados a generar leads y ventas." }
  ],

  /* ---------- 2. Servicios ---------- */
  services: [
    {
      icon: "icon-rocket",
      name: "Landing Page",
      desc: "Una página enfocada 100% en convertir visitantes en clientes. Ideal para lanzar un producto, servicio o campaña.",
      features: [
        "Diseño personalizado",
        "Optimización de velocidad",
        "Formulario y WhatsApp integrado",
        "SEO básico",
        "Contenido orientado a conversión",
        "Diseño responsive"
      ],
      cta: "Cotizar landing page",
      path: "kittcodex.com/landing"
    }
  ],

  /* ---------- 3. Planes ---------- */
  plans: [
    {
      featured: false,
      name: "Landing Esencial",
      price: "400",
      tagline: "Ideal para emprendedores, profesionales independientes y pequeños negocios que buscan una presencia profesional en Internet.",
      features: [
        "Diseño personalizado orientado a presentar tu negocio y generar contactos",
        "Hasta 5 secciones personalizadas",
        "Diseño responsive (PC, tablet y móvil)",
        "Botón de WhatsApp",
        "Formulario de contacto",
        "Integración con Google Maps (si aplica)",
        "SEO básico (estructura, títulos y velocidad de carga)",
        "Optimización básica de velocidad",
        "1 ronda de cambios",
        "Entrega de 5 a 7 días"
      ],
      cta: "Elegir este plan"
    },
    {
      featured: true,
      badge: "Más popular",
      name: "Landing Profesional",
      price: "500",
      tagline: "Ideal para empresas que desean proyectar una imagen más sólida y profesional.",
      base: "Incluye todo lo del plan Esencial más:",
      features: [
        "Hasta 7 secciones personalizadas",
        "Diseño personalizado según la identidad de tu negocio",
        "Animaciones e interacciones",
        "Galería de imágenes",
        "Integración con Google Analytics",
        "Integración de redes sociales",
        "SEO técnico mejorado",
        "Optimización de rendimiento",
        "2 rondas de cambios",
        "Entrega de 7 a 10 días"
      ],
      cta: "Elegir este plan"
    },
    {
      featured: false,
      name: "Landing Empresarial",
      price: "700",
      tagline: "Pensado para empresas que buscan una presencia digital de alto nivel.",
      base: "Incluye todo lo del plan Profesional más:",
      features: [
        "Hasta 10 secciones personalizadas",
        "Diseño UX/UI personalizado",
        "Microanimaciones",
        "Google Search Console",
        "Optimización avanzada de velocidad y experiencia de usuario",
        "Optimización de imágenes",
        "Soporte prioritario durante 30 días",
        "3 rondas de cambios",
        "Entrega de 10 a 15 días"
      ],
      cta: "Elegir este plan"
    }
  ],

  /* ---------- 4. Infraestructura ---------- */
  infraFeatures: [
    { icon: "icon-globe", label: "Dominio" },
    { icon: "icon-server", label: "Hosting" },
    { icon: "icon-lock", label: "Certificado SSL (HTTPS)" },
    { icon: "icon-rocket", label: "Publicación y despliegue del sitio" },
    { icon: "icon-code", label: "Configuración de DNS" },
    { icon: "icon-mail", label: "Correos corporativos (si el proveedor lo permite)" },
    { icon: "icon-refresh", label: "Copias de seguridad periódicas" },
    { icon: "icon-gauge", label: "Supervisión básica del funcionamiento" },
    { icon: "icon-shield", label: "Administración, monitoreo y renovación anual" }
  ],

  /* ---------- 5. Mantenimiento ---------- */
  maintenance: [
    {
      featured: false,
      name: "Plan Básico",
      price: "50",
      period: "/mes",
      features: [
        "Hasta 2 solicitudes de cambios al mes",
        "Actualización de textos",
        "Cambio de imágenes",
        "Soporte básico"
      ],
      cta: "Elegir este plan"
    },
    {
      featured: true,
      badge: "Más popular",
      name: "Plan Profesional",
      price: "100",
      period: "/mes",
      features: [
        "Hasta 6 solicitudes de cambios al mes",
        "Actualización de contenido",
        "Ajustes menores de contenido y estructura",
        "Optimización mensual",
        "Revisión del funcionamiento del sitio",
        "Soporte prioritario"
      ],
      cta: "Elegir este plan"
    }
  ],

  /* ---------- 6. Proceso ---------- */
  process: [
    { icon: "icon-chat", title: "Descubrimiento", desc: "Conversamos sobre tu negocio, objetivos y público." },
    { icon: "icon-palette", title: "Diseño", desc: "Creamos el diseño a medida y lo revisamos contigo." },
    { icon: "icon-code", title: "Desarrollo", desc: "Construimos tu landing con código limpio y rápido." },
    { icon: "icon-rocket", title: "Lanzamiento", desc: "Publicamos el sitio, realizamos las pruebas finales y entregamos el proyecto." }
  ],

  /* ---------- 7. Preguntas frecuentes ---------- */
  faq: [
    {
      title: "¿Cuánto tarda mi landing page?",
      items: [
        "El plan Esencial se entrega en 5 a 7 días.",
        "El plan Profesional en 7 a 10 días.",
        "El plan Empresarial en 10 a 15 días."
      ]
    },
    {
      title: "¿Cómo se realiza el pago?",
      items: [
        "El pago se divide en 50% al iniciar el proyecto y 50% antes de la entrega final.",
        "También aceptamos Yape, Plin, transferencias y PayPal."
      ]
    },
    {
      title: "¿Necesito saber de tecnología?",
      items: [
        "No. Tú solo compartes tu idea y la información de tu negocio.",
        "Nosotros nos encargamos de todo el aspecto técnico."
      ]
    },
    {
      title: "¿La infraestructura web es obligatoria?",
      items: [
        "No. Es un servicio independiente (S/ 400 al año).",
        "Puedes contratarlo con nosotros o usar tu propio hosting.",
        "Si no cuentas con hosting, lo gestionamos por ti."
      ]
    },
    {
      title: "¿Cómo funciona el mantenimiento?",
      items: [
        "Es opcional y se paga mensualmente (S/ 50 o S/ 100).",
        "Incluye solicitudes de cambios, actualizaciones y soporte."
      ]
    },
    {
      title: "¿Con qué métodos de pago trabajan?",
      items: [
        "Transferencias bancarias (BCP, Yape, Plin) dentro de Perú.",
        "PayPal si estás fuera del país.",
      ]
    }
  ],

  /* ---------- 8. Proyectos ---------- */
  projects: [
    {
      badge: "Landing Esencial",
      icon: "icon-cart",
      name: "Pollería El Sazón",
      category: "Restaurante · Pollo a la brasa",
      desc: "Página enfocada en pedidos por WhatsApp: carta, horarios, opiniones y pedido directo desde el celular.",
      tags: ["Negocio local", "Pedidos por WhatsApp", "A medida"],
      img: "assets/img/presentacion_polleria.png",
      url: "https://ellsazon.netlify.app/"
    },
    {
      badge: "Landing Empresarial",
      icon: "icon-browser",
      name: "Horizonte Inmobiliaria",
      category: "Inmobiliaria",
      desc: "Web corporativa para proyectos inmobiliarios: proyectos destacados, asesoría personalizada y visitas guiadas.",
      tags: ["Corporativo", "Inmobiliaria", "SEO y Open Graph"],
      img: "assets/img/presentacion_inmobiliaria.png",
      url: "https://horiizonte.netlify.app/"
    },
    {
      badge: "Landing Profesional",
      icon: "icon-target",
      name: "FitZone",
      category: "Gimnasio",
      desc: "Landing orientada a convertir visitantes en socios: planes, horarios, clases grupales y clase gratis por WhatsApp.",
      tags: ["Gimnasio", "Captación de clientes", "A medida"],
      img: "assets/img/presentacion_gym.png",
      url: "https://fiitzone.netlify.app/"
    }
  ],

  /* ---------- 9. Servicios del footer ---------- */
  footerServices: [
    { label: "Landing Page", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Infraestructura Web", href: "#infraestructura" },
    { label: "Mantenimiento", href: "#mantenimiento" }
  ],

  /* ---------- 10. Formulario ---------- */
  serviceOptions: ["Landing Page"],

  budgetOptions: ["S/ 400", "S/ 500", "S/ 700"],

  formPlaceholders: {
    service: "Selecciona un servicio",
    budget: "Selecciona el precio"
  }
};
