// All the text of the site that is not a project. One object per language, same shape.
// Projects live in src/content/projects/{en,es}/*.yaml.

export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const links = {
  "email": "yasinbahri08@gmail.com",
  "linkedin": "https://www.linkedin.com/in/yasinbahri/",
  "github": "https://github.com/yasin080",
  "ranking": "https://www.42network.org/blog/breaking-news-42-ranks-3rd-worldwide-for-innovation/",
  "cv": {
    "en": "cv/Yasin-Bahri-CV-EN.pdf",
    "es": "cv/Yasin-Bahri-CV-ES.pdf"
  }
} as const;

export const ui = {
  "en": {
    "meta": {
      "title": "Yasin Bahri — Junior Software Developer",
      "description": "I build software end to end: from a Unix shell and an HTTP server in C/C++ to revisatualquiler.es, a web app I designed, built and launched on my own, with real payments in production."
    },
    "skip": "Skip to content",
    "navLabel": "Main",
    "langLabel": "Language",
    "nav": {
      "work": "Projects",
      "learn": "42",
      "experience": "Experience",
      "contact": "Contact"
    },
    "themeToDark": "Switch to dark mode",
    "themeToLight": "Switch to light mode",
    "role": "Junior Software Developer",
    "ledeA": "I build software end to end: from a Unix shell and an HTTP server in C/C++ to ",
    "ledeB": ", a web app I designed, built and launched on my own, with real payments in production.",
    "spec": {
      "role": "role",
      "loc": "location",
      "edu": "education",
      "eduVal": "Common Core completed · 42 Urduliz",
      "status": "status",
      "statusVal": "Looking for a junior role"
    },
    "btn": {
      "email": "Email me",
      "cv": "Download CV",
      "caseStudy": "Read the case study",
      "live": "Visit live site"
    },
    "lbl": {
      "featured": "featured",
      "learn": "education",
      "work": "projects",
      "tools": "toolbox",
      "exp": "background",
      "about": "about",
      "contact": "contact"
    },
    "h": {
      "featured": "Featured project",
      "learn": "How I learned: 42",
      "work": "Projects",
      "tools": "Tools I’ve worked with",
      "exp": "Experience & education",
      "about": "About"
    },
    "rankSup": "rd",
    "rankCap": "most innovative university in the world — WURI, 2025 and 2026.",
    "rankLink": "Read about the ranking",
    "learn1": "42 was ranked the 3rd most innovative university in the world (WURI, 2025 and 2026). There are no teachers and no classes: each project is a goal and a set of rules, and I had to work out the rest from documentation, man pages, trial and error and other students.",
    "meansTitle": "How a project gets validated",
    "means": [
      {
        "h": "The brief",
        "p": "a subject with objectives and constraints, like a spec from a client or a team lead."
      },
      {
        "h": "The build",
        "p": "alone or in teams of up to four, sharing one codebase: splitting the work, branches, pull requests and code review."
      },
      {
        "h": "The review",
        "p": "it only passes after three peer evaluations, from students who test it and make me defend my code."
      },
      {
        "h": "The exams",
        "p": "binary: full marks or a fail. Like software, it either works or it doesn’t."
      }
    ],
    "moreDetails": "More details",
    "openAria": "Open project details",
    "moreTitle": "Smaller 42 projects",
    "small": [
      {
        "name": "philosophers",
        "repo": "https://github.com/yasin080/Philosophers",
        "text": "The dining philosophers problem in C with POSIX threads and mutexes; deadlock avoided by fork ordering, checked with ThreadSanitizer and up to 200 philosophers."
      },
      {
        "name": "push_swap",
        "repo": "https://github.com/yasin080/push_swap",
        "text": "Sorting integers with two stacks and a restricted set of operations; 500 numbers in under 4,900 operations (42 limit for full score: 5,500), with a checker program."
      }
    ],
    "tools": [
      {
        "label": "Languages",
        "items": [
          {
            "name": "C",
            "icon": "c"
          },
          {
            "name": "C++",
            "icon": "cpp"
          },
          {
            "name": "TypeScript",
            "icon": "ts"
          },
          {
            "name": "JavaScript",
            "icon": "js"
          },
          {
            "name": "SQL",
            "icon": null
          },
          {
            "name": "Bash",
            "icon": "bash"
          },
          {
            "name": "PHP",
            "icon": "php"
          }
        ]
      },
      {
        "label": "Web",
        "items": [
          {
            "name": "React",
            "icon": "react"
          },
          {
            "name": "Vite",
            "icon": "vite"
          },
          {
            "name": "Tailwind CSS",
            "icon": "tailwind"
          },
          {
            "name": "Node.js serverless functions",
            "icon": "nodep"
          },
          {
            "name": "REST APIs",
            "icon": null
          },
          {
            "name": "WebSockets (Laravel Reverb)",
            "icon": "laravel"
          },
          {
            "name": "WordPress",
            "icon": "wordpress"
          }
        ]
      },
      {
        "label": "Data and services",
        "items": [
          {
            "name": "PostgreSQL (Supabase)",
            "icon": "postgres"
          },
          {
            "name": "MariaDB",
            "icon": "mariadb"
          },
          {
            "name": "Stripe",
            "icon": "stripe"
          },
          {
            "name": "Resend",
            "icon": "resend"
          },
          {
            "name": "LLM APIs (OpenRouter)",
            "icon": "openrouter"
          }
        ]
      },
      {
        "label": "Infrastructure",
        "items": [
          {
            "name": "Docker",
            "icon": "docker"
          },
          {
            "name": "Docker Compose",
            "icon": "docker"
          },
          {
            "name": "NGINX",
            "icon": "nginx"
          },
          {
            "name": "Linux",
            "icon": "linux"
          },
          {
            "name": "Vercel",
            "icon": "vercel"
          },
          {
            "name": "Git",
            "icon": "git"
          }
        ]
      }
    ],
    "eduTitle": "Education",
    "edu": [
      {
        "when": "2023 – present",
        "title": "42 Urduliz (Bizkaia)",
        "org": "Common Core completed",
        "desc": "Project-based software engineering programme with no teachers or classes and peer evaluation."
      },
      {
        "when": "2026 – in progress",
        "title": "CS50: Introduction to Computer Science",
        "org": "Harvard University (online)",
        "desc": ""
      },
      {
        "when": "",
        "title": "Advanced Vocational Diploma (CFGS) in Marketing and Advertising",
        "org": "Regina Carmeli, Rubí",
        "desc": ""
      },
      {
        "when": "",
        "title": "Bachillerato (upper-secondary education), science track",
        "org": "IES Miguel de Unamuno",
        "desc": ""
      }
    ],
    "workTitle": "Before software: digital marketing",
    "workIntro": "Before 42 I worked in digital marketing. It taught me to read metrics, work with non-technical teams and think about the business side of a product, which I put to use when I built and launched revisatualquiler.es.",
    "work": [
      {
        "when": "Apr 2022 – May 2023",
        "title": "Digital Marketing Lead",
        "org": "Inmobiliaria Elkano, Bilbao",
        "desc": "Campaign analytics and KPI dashboards, tracking pixels and technical SEO. Lead generation up 300% through audience segmentation and iterative campaign testing."
      },
      {
        "when": "Jun 2021 – Feb 2022",
        "title": "Digital Marketing Assistant",
        "org": "North Market (sales outsourcing), Bilbao",
        "desc": "Campaign design and monitoring, and automation of repetitive reporting."
      }
    ],
    "langsLabel": "Languages",
    "langs": "Spanish (native) · Arabic (native) · English (B2) · Basque (B1)",
    "about": "For three years I’ve been learning to program the way software teams work: from a brief with requirements, with peers reviewing my code, and no pass until it works. That’s how I got used to solving problems on my own with documentation and trial and error, picking up new languages and tools when a project calls for it, and asking for help only after I’ve tried. My standard is simple: it works, or it isn’t done.",
    "contactTitle": "Interested in working together?",
    "contactText": "I’m looking for a junior software developer role. Email me or reach out on LinkedIn.",
    "copy": "copy",
    "copied": "copied ✓",
    "allProjects": "All projects",
    "liveSite": "Live site",
    "repository": "Repository",
    "repoPrivate": "Repository: private",
    "links": "Links",
    "whatItIs": "What it is",
    "howItWorks": "How it works",
    "challenges": "Challenges & decisions",
    "placeholder": "Placeholder",
    "prev": "Previous",
    "next": "Next project",
    "moreProjects": "More projects",
    "backTop": "back to top",
    "notFound": {
      "title": "Page not found",
      "text": "This page does not exist or has moved.",
      "back": "Back to the home page"
    }
  },
  "es": {
    "meta": {
      "title": "Yasin Bahri — Desarrollador de Software Junior",
      "description": "Construyo software de principio a fin: desde una shell de Unix y un servidor HTTP en C/C++ hasta revisatualquiler.es, una aplicación web que diseñé, desarrollé y lancé yo solo, con pagos reales en producción."
    },
    "skip": "Saltar al contenido",
    "navLabel": "Principal",
    "langLabel": "Idioma",
    "nav": {
      "work": "Proyectos",
      "learn": "42",
      "experience": "Experiencia",
      "contact": "Contacto"
    },
    "themeToDark": "Cambiar a modo oscuro",
    "themeToLight": "Cambiar a modo claro",
    "role": "Desarrollador de Software Junior",
    "ledeA": "Construyo software de principio a fin: desde una shell de Unix y un servidor HTTP en C/C++ hasta ",
    "ledeB": ", una aplicación web que diseñé, desarrollé y lancé yo solo, con pagos reales en producción.",
    "spec": {
      "role": "puesto",
      "loc": "ubicación",
      "edu": "formación",
      "eduVal": "Common Core completado · 42 Urduliz",
      "status": "estado",
      "statusVal": "Buscando un puesto junior"
    },
    "btn": {
      "email": "Escríbeme",
      "cv": "Descargar CV",
      "caseStudy": "Ver el caso completo",
      "live": "Visitar la web"
    },
    "lbl": {
      "featured": "destacado",
      "learn": "formación",
      "work": "proyectos",
      "tools": "herramientas",
      "exp": "trayectoria",
      "about": "sobre mí",
      "contact": "contacto"
    },
    "h": {
      "featured": "Proyecto destacado",
      "learn": "Cómo aprendí: 42",
      "work": "Proyectos",
      "tools": "Herramientas con las que he trabajado",
      "exp": "Experiencia y formación",
      "about": "Sobre mí"
    },
    "rankSup": ".ª",
    "rankCap": "universidad más innovadora del mundo — WURI, 2025 y 2026.",
    "rankLink": "Leer sobre el ranking",
    "learn1": "42 fue elegida la 3.ª universidad más innovadora del mundo (WURI, 2025 y 2026). No hay profesores ni clases: cada proyecto es un objetivo y un conjunto de reglas, y el resto lo tuve que resolver con documentación, páginas man, prueba y error y otros estudiantes.",
    "meansTitle": "Cómo se valida un proyecto",
    "means": [
      {
        "h": "El enunciado",
        "p": "objetivos y limitaciones, como el encargo de un cliente o de un responsable."
      },
      {
        "h": "El desarrollo",
        "p": "solo o en equipos de hasta cuatro, compartiendo código: repartir el trabajo, ramas, pull requests y code review."
      },
      {
        "h": "La corrección",
        "p": "solo se aprueba tras tres correcciones de otros alumnos, que lo prueban y me hacen defender mi código."
      },
      {
        "h": "Los exámenes",
        "p": "binarios: o nota máxima o suspenso. Como el software: funciona o no funciona."
      }
    ],
    "moreDetails": "Más detalles",
    "openAria": "Ver detalles del proyecto",
    "moreTitle": "Proyectos más pequeños de 42",
    "small": [
      {
        "name": "philosophers",
        "repo": "https://github.com/yasin080/Philosophers",
        "text": "El problema de los filósofos comensales en C con hilos POSIX y mutex; el interbloqueo se evita ordenando los tenedores, comprobado con ThreadSanitizer y con hasta 200 filósofos."
      },
      {
        "name": "push_swap",
        "repo": "https://github.com/yasin080/push_swap",
        "text": "Ordenación de enteros con dos pilas y un conjunto restringido de operaciones; 500 números en menos de 4.900 operaciones (límite de 42 para la nota máxima: 5.500), con programa checker."
      }
    ],
    "tools": [
      {
        "label": "Lenguajes",
        "items": [
          {
            "name": "C",
            "icon": "c"
          },
          {
            "name": "C++",
            "icon": "cpp"
          },
          {
            "name": "TypeScript",
            "icon": "ts"
          },
          {
            "name": "JavaScript",
            "icon": "js"
          },
          {
            "name": "SQL",
            "icon": null
          },
          {
            "name": "Bash",
            "icon": "bash"
          },
          {
            "name": "PHP",
            "icon": "php"
          }
        ]
      },
      {
        "label": "Web",
        "items": [
          {
            "name": "React",
            "icon": "react"
          },
          {
            "name": "Vite",
            "icon": "vite"
          },
          {
            "name": "Tailwind CSS",
            "icon": "tailwind"
          },
          {
            "name": "Funciones serverless en Node.js",
            "icon": "nodep"
          },
          {
            "name": "APIs REST",
            "icon": null
          },
          {
            "name": "WebSockets (Laravel Reverb)",
            "icon": "laravel"
          },
          {
            "name": "WordPress",
            "icon": "wordpress"
          }
        ]
      },
      {
        "label": "Datos y servicios",
        "items": [
          {
            "name": "PostgreSQL (Supabase)",
            "icon": "postgres"
          },
          {
            "name": "MariaDB",
            "icon": "mariadb"
          },
          {
            "name": "Stripe",
            "icon": "stripe"
          },
          {
            "name": "Resend",
            "icon": "resend"
          },
          {
            "name": "APIs de LLM (OpenRouter)",
            "icon": "openrouter"
          }
        ]
      },
      {
        "label": "Infraestructura",
        "items": [
          {
            "name": "Docker",
            "icon": "docker"
          },
          {
            "name": "Docker Compose",
            "icon": "docker"
          },
          {
            "name": "NGINX",
            "icon": "nginx"
          },
          {
            "name": "Linux",
            "icon": "linux"
          },
          {
            "name": "Vercel",
            "icon": "vercel"
          },
          {
            "name": "Git",
            "icon": "git"
          }
        ]
      }
    ],
    "eduTitle": "Formación",
    "edu": [
      {
        "when": "2023 – actualidad",
        "title": "42 Urduliz (Bizkaia)",
        "org": "Common Core completado",
        "desc": "Programa de ingeniería de software basado en proyectos, sin profesores ni clases y con evaluación entre compañeros."
      },
      {
        "when": "2026 – en curso",
        "title": "CS50: Introduction to Computer Science",
        "org": "Harvard University (online)",
        "desc": ""
      },
      {
        "when": "",
        "title": "Grado Superior en Marketing y Publicidad",
        "org": "Centro Regina Carmeli, Rubí",
        "desc": ""
      },
      {
        "when": "",
        "title": "Bachillerato científico",
        "org": "IES Miguel de Unamuno",
        "desc": ""
      }
    ],
    "workTitle": "Antes del software: marketing digital",
    "workIntro": "Antes de 42 trabajé en marketing digital. Me enseñó a leer métricas, a trabajar con equipos no técnicos y a pensar en la parte de negocio de un producto, algo que apliqué al crear y lanzar revisatualquiler.es.",
    "work": [
      {
        "when": "abr 2022 – may 2023",
        "title": "Responsable de Marketing Digital",
        "org": "Inmobiliaria Elkano, Bilbao",
        "desc": "Analítica de campañas y dashboards de KPIs, píxeles de seguimiento y SEO técnico. Generación de leads un 300% mayor gracias a la segmentación de audiencias y a pruebas iterativas de campañas."
      },
      {
        "when": "jun 2021 – feb 2022",
        "title": "Asistente de Marketing Digital",
        "org": "North Market (outsourcing comercial), Bilbao",
        "desc": "Diseño y seguimiento de campañas, y automatización de informes repetitivos."
      }
    ],
    "langsLabel": "Idiomas",
    "langs": "Español (nativo) · Árabe (nativo) · Inglés (B2) · Euskera (B1)",
    "about": "Llevo tres años aprendiendo a programar como se trabaja en un equipo de desarrollo: a partir de un enunciado con requisitos, con compañeros revisando mi código y sin aprobar hasta que funciona. Así me acostumbré a resolver por mi cuenta con documentación y prueba y error, a aprender lenguajes y herramientas nuevas cuando el proyecto lo pide y a pedir ayuda solo después de haber probado. Mi criterio es simple: o funciona, o no está terminado.",
    "contactTitle": "¿Te interesa que trabajemos juntos?",
    "contactText": "Busco un puesto de desarrollador de software junior. Escríbeme por email o contáctame en LinkedIn.",
    "copy": "copiar",
    "copied": "copiado ✓",
    "allProjects": "Todos los proyectos",
    "liveSite": "Web en producción",
    "repository": "Repositorio",
    "repoPrivate": "Repositorio: privado",
    "links": "Enlaces",
    "whatItIs": "Qué es",
    "howItWorks": "Cómo funciona",
    "challenges": "Retos y decisiones",
    "placeholder": "Placeholder",
    "prev": "Anterior",
    "next": "Siguiente proyecto",
    "moreProjects": "Más proyectos",
    "backTop": "volver arriba",
    "notFound": {
      "title": "Página no encontrada",
      "text": "Esta página no existe o ha cambiado de sitio.",
      "back": "Volver al inicio"
    }
  }
} as const;
