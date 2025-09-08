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