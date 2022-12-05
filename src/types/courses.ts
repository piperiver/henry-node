export interface Comment {
  body: string
  date: string
  star: number
}

export interface Author {
  name: string
  profession: string
}
export interface Lesson {
  seconds: number
  title: string
  description: string
}

export enum Levels {
  all = 'all leves',
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  expert = 'Expert',
}

export interface Course {
  title: string
  description: string
  comments: Comment[]
  level: Levels
  language: string
  completed: boolean
  video: string
  author: Author
  lessons: Lesson[]
}

export type Filters = Partial<Pick<Course, 'title' | 'completed' | 'language'>>
