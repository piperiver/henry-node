import { courseModel } from '../models/courses'
import { Course, Levels } from '../types/courses'

const mockCourses: Course[] = [
  {
    author: {
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
    video: 'https://www.youtube.com/embed/AOpcZdYeUAs',
  },
  {
    author: {
      name: 'MiduDev',
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
    video: 'https://www.youtube.com/embed/T_j60n1zgu0',
  },
]

export const insertMock = () => {
  courseModel.insertMany(mockCourses, function (err) {
    console.log(err)
  })
}
