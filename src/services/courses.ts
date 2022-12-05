import { courseModel } from '../models/courses'
import { Filters } from '../types/courses'

export const getAllCourses = () => {
  return courseModel.find()
}

export const getCourse = (id: string) => {
  return courseModel.findById(id)
}

export const filterCourses = ({ completed, language, title }: Filters) => {
  const filters = {
    ...(title ? { title: { $regex: new RegExp(title, 'i') } } : {}),
    ...(typeof completed === 'boolean' ? { completed: completed } : {}),
    ...(language ? { language: { $regex: language } } : {}),
  }
  return courseModel.find(filters).exec()
}
