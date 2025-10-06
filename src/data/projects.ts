export type Project = {
slug: string
title: string
description: string
tags: string[]
repoUrl: string
demoUrl?: string
image?: string
imageAlt: string

}


export const projects: Project[] = [
  {
  slug: 'pillpal',
  title: 'PillPal – Aplicación Fullstack para Seguimiento de Medicación',
  description:
    'PillPal facilita el seguimiento de la toma de medicamentos para pacientes, familias y cuidadores. El backend gestiona la lógica de usuarios, medicamentos, recordatorios y tomas diarias. El frontend, permite registrar medicamentos, marcar dosis como tomadas y visualizar el estado de cada tratamiento. El proyecto se ejecuta con Docker.',
  tags: [
    'React',
    'Vite',
    'Spring Boot',
    'Java',
    'MySQL',
    'Docker',
    'Axios',
    'Swagger UI',
    'REST API',
    'Responsive Design',
    'Tailwind',
    'Testing'
  ],
  repoUrl: 'https://github.com/angiepereir/PillPal-FullStack',
  demoUrl: 'https://github.com/angiepereir/PillPal-FullStack', 
  image: '/pillpal.png',
  imageAlt: 'Aplicación fullstack para seguimiento de medicación'
},
{
  slug: 'butterflies-mongodb',
  title: 'App Butterflies – Fullstack con MongoDB',
  description:
    'Versión mejorada de la app “Asia Butterflies”, migrada de MySQL a MongoDB. Proyecto fullstack para gestionar fichas de mariposas: listar, crear, ver, actualizar y eliminar, incluyendo campos como Estado de Conservación y Periodo de Actividad. Implementé el backend con Node.js, Express y Mongoose, conectando con una base de datos en MongoDB Atlas. Añadí testing con Jest, Supertest y mongodb-memory-server para asegurar la calidad de la API.',
  tags: [
    'React',
    'Vite',
    'Node.js',
    'Express',
    'MongoDB',
    'Mongoose',
    'Tailwind CSS',
    'Jest',
    'Supertest',
    'REST API',
    'Fullstack'
  ],
  repoUrl: 'https://github.com/angiepereir/butterfly-fullstack-mongodb',
  demoUrl: 'https://github.com/angiepereir/butterfly-fullstack-mongodb',
  image: '/mongodb.png',
  imageAlt: 'Aplicación fullstack de mariposas con MongoDB'
},


{
    slug: 'asia-butterflies',
    title: 'Asia Butterflies – Plataforma de registro de mariposas',
    description:
      'Aplicación fullstack para registrar, listar y gestionar mariposas de Asia. Implementé el backend con modelos en Sequelize, integré la base de datos en MySQL (Workbench), conecté el frontend y apliqué TDD para asegurar la calidad del código.',
    tags: [
      'React',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL Workbench',
      'TDD',
      'Jest',
      'REST API'
    ],
    repoUrl: 'https://github.com/angiepereir/butterfly-fullstack',
    demoUrl: 'https://github.com/angiepereir/butterfly-fullstack', 
    image: '/fullstack.png',
    imageAlt: 'Plataforma para registrar mariposas de Asia'
},
{
slug: 'tarot-stem',
title: 'Tarot STEM – App educativa',
description: 'Explora cartas de tarot de forma interactiva con lectura de tres cartas y filtros.',
tags: ['React', 'React Router', 'Vite', 'API REST', 'CSS'],
repoUrl: 'https://github.com/angiepereir/Tarot',
demoUrl: 'https://tarot-delta-mocha.vercel.app/',
image: '/tarot.png',
imageAlt: 'Interfaz de Tarot STEM',
},
{
slug: 'boda-rg',
title: 'Boda R & G — Web de invitación con galería colaborativa',
description:
'Sitio web de bodas con galería de fotos colaborativa, subida desde móvil, modo admin, QR de invitación y diseño claro.',
tags: [
'HTML',
'CSS',
'JavaScript',
'Cloudinary',
'Firebase Auth',
'Firestore',
'qrcode.js'
],
repoUrl: 'https://github.com/angiepereir/boda-rg',
demoUrl: 'https://angiepereir.github.io/Boda-R-G/',
image: '/boda.png',
imageAlt: 'Web de invitación con galería de fotos',
},
{
slug: 'nectara',
title: 'Nectara – Cuaderno de campo',
description: 'App para documentar mariposas con CRUD, subida de imágenes y validación.',
tags: ['React', 'Vite', 'Tailwind', 'Cloudinary', 'Axios', 'React Hook Form', 'Three.js'],
repoUrl: 'https://github.com/angiepereir/nectara',
demoUrl: 'https://github.com/angiepereir/nectara',
image: '/nectara.png',
imageAlt: 'Listado y detalle de mariposas',
},
{
slug: 'cine-de-verano',
title: 'Cine de Verano – CRUD de Películas',
description: 'Gestión de películas (crear, editar, eliminar) con API simulada y UI sencilla.',
tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'JSON Server'],
repoUrl: 'https://github.com/angiepereir/cine-verano-crud',
demoUrl: 'https://github.com/angiepereir/cine-verano-crud',
image: '/cine.png',
imageAlt: 'Gestión de películas',
},
{
slug: 'litio',
title: 'El Litio y su Impacto Tecnológico y Ambiental',
description:
'Trabajo académico colaborativo sobre el litio: qué es, dónde se encuentra, historia, aplicaciones, impacto ambiental, futuro y juegos interactivos.',
tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Charts.js', 'AOS'],
repoUrl: 'https://github.com/angiepereir/el-litio',
demoUrl: 'https://angiepereir.github.io/Litio/',
image: '/litio.png',
imageAlt: 'Presentación interactiva sobre el litio',
},

]