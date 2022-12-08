import { courseModel } from '../models/courses'
import { Course, Levels } from '../types/courses'

const mockCourses: Course[] = [
  {
    cover: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
    author: {
      image: 'https://pbs.twimg.com/profile_images/769659569161330693/V9MtZUEO_400x400.jpg',
      name: 'Bluuweb',
      profession: 'Software Developer',
    },
    comments: [
      {
        body: 'Excelent!!',
        date: '01-12-2022 13:00',
        star: 5,
      },
      {
        body: 'Good Course',
        date: '15-11-2022 09:00',
        star: 5,
      },
    ],
    completed: true,
    description:
      'Aprende a trabajar con Next.js el Framework de React para Producción, en este video veremos una introducción teórica sobre el SSR, SSG y fundamentos de Next.',
    language: 'Spanish',
    lessons: [
      {
        description: 'Introducción al curso de Next.js - ¿SSR, SSG, Static?',
        seconds: 2880,
        title: 'Introducción al curso de Next.js - ¿SSR, SSG, Static?',
      },
      {
        description: '¿Qué es API, REST y RESTFul? (Explicación simple para programadores JS)',
        seconds: 2880,
        title: '¿Qué es API, REST y RESTFul? (Explicación simple para programadores JS)',
      },
      {
        description: 'Curso de Next.js #02 Instalación de un nuevo proyecto + Extensiones VSCode',
        seconds: 2880,
        title: 'Curso de Next.js #02 Instalación de un nuevo proyecto + Extensiones VSCode',
      },
    ],
    level: Levels.intermediate,
    title: 'Curso de Next js',
    video: 'AOpcZdYeUAs',
  },
  {
    cover: 'https://reactjs.org/logo-og.png',
    author: {
      name: 'MiduDev',
      profession: 'Software Developer',
      image: 'https://pbs.twimg.com/profile_images/1600566073719300096/LgB5qDyI_400x400.jpg',
    },
    comments: [
      {
        body: 'Excelent!!',
        date: '01-12-2022 13:00',
        star: 3,
      },
      {
        body: 'Good Course',
        date: '15-11-2022 09:00',
        star: 5,
      },
    ],
    completed: false,
    description:
      'Te enseño React desde cero. 👨‍🏫 ¿Qué es React? ¿Por qué deberías aprenderlo? ¿Por qué lo necesitamos? ¿Qué es JSX 🤔? Props y State. Eventos. Renderizado condicional y useState. 🔥',
    language: 'Spanish',
    lessons: [
      {
        description:
          'Curso REACT JS ⚛️ - Aprende desde CERO 📈 Componentes, State, JSX (Tutorial Desde Cero en Español)',
        seconds: 2880,
        title:
          'Curso REACT JS ⚛️ - Aprende desde CERO 📈 Componentes, State, JSX (Tutorial Desde Cero en Español)',
      },
      {
        description:
          'En ingeniería de software, SOLID es un acrónimo mnemónico introducido por Robert C. Martin​a comienzos de la década del 2000​que representa cinco principios básicos de la programación orientada a objetos y el diseño.',
        title: 'Principios SOLID en React.js (Buenas prácticas) con ejemplos prácticos',
        seconds: 1500,
      },
    ],
    level: Levels.beginner,
    title: 'Aprende React desde 0',
    video: 'T_j60n1zgu0',
  },
  {
    cover: 'https://img.youtube.com/vi/-xDZwb-PY0M/hqdefault.jpg',
    author: {
      name: 'Hola Mundo',
      profession: 'Software Developer',
      image: 'https://pbs.twimg.com/profile_images/1595880603173650432/8h-HC-NW_400x400.jpg',
    },
    comments: [
      {
        body: 'Typescript is the best',
        date: '03-12-2022 13:00',
        star: 5,
      },
      {
        body: 'Good Course',
        date: '15-11-2022 09:00',
        star: 4,
      },
    ],
    completed: false,
    description:
      'Typescript se ha vuelto la mejor herramienta para evitar errores de compilacion desde el momento en que estas codeando, es tan popular que ya es un estandar para muchas compañias, en este video vamos a enseñarte algunos skills de typescript brutales',
    language: 'Spanish',
    lessons: [
      {
        description: 'Presentación',
        seconds: 2880,
        title: 'Presentacion del video',
      },
      {
        description: 'Que necesita nuestra maquina para ejecutar typescript',
        title: 'Requisitos',
        seconds: 1500,
      },
      {
        description: 'Que necesita nuestra maquina para ejecutar typescript',
        title: 'Requisitos',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
    ],
    level: Levels.all,
    title: 'Aprende TypeScript ahora! curso intensivo',
    video: '-xDZwb-PY0M',
  },
  {
    cover: 'https://img.youtube.com/vi/Dc0PgJm3KA0/hqdefault.jpg',
    author: {
      name: 'Fernando Herrera',
      profession: 'Software Developer',
      image: 'https://pbs.twimg.com/profile_images/796737477759221760/1s-3xb4V_400x400.jpg',
    },
    comments: [
      {
        body: 'The best',
        date: '03-12-2022 13:00',
        star: 3,
      },
      {
        body: 'Good Course',
        date: '15-11-2022 09:00',
        star: 3,
      },
    ],
    completed: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    language: 'Spanish',
    lessons: [
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
    ],
    level: Levels.all,
    title: 'Cuanto cobrar por un proyecto como Freelance',
    video: 'Dc0PgJm3KA0',
  },
  {
    cover: 'https://img.youtube.com/vi/DCoBcpOA7W4/hqdefault.jpg',
    author: {
      name: 'Pelao Nerd',
      profession: 'DevOps',
      image: 'https://pbs.twimg.com/profile_images/1565095013322833921/UQIJ374h_400x400.jpg',
    },
    comments: [
      {
        body: 'The best',
        date: '03-12-2022 13:00',
        star: 5,
      },
      {
        body: 'Good Course',
        date: '15-11-2022 09:00',
        star: 5,
      },
    ],
    completed: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    language: 'Spanish',
    lessons: [
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
    ],
    level: Levels.intermediate,
    title: 'KUBERNETES De NOVATO a PRO! (CURSO COMPLETO EN ESPAÑOL)',
    video: 'DCoBcpOA7W4',
  },
  {
    cover: 'https://img.youtube.com/vi/o3JWb04DRIs/hqdefault.jpg',
    author: {
      name: 'Jack Herrington',
      profession: 'Software Developer',
      image: 'https://pbs.twimg.com/profile_images/1366463597388263425/BPqYw5v3_400x400.jpg',
    },
    comments: [
      {
        body: 'The best',
        date: '03-12-2022 13:00',
        star: 5,
      },
      {
        body: 'Good Course',
        date: '15-11-2022 09:00',
        star: 5,
      },
    ],
    completed: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    language: 'English',
    lessons: [
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
      {
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
        title: 'Lorem',
        seconds: 1500,
      },
    ],
    level: Levels.beginner,
    title: 'React Streaming In Depth: NextJS! Remix! DIY!',
    video: 'o3JWb04DRIs',
  },
]

export const insertMock = () => {
  courseModel.insertMany(mockCourses, function (err) {
    console.log(err)
  })
}
