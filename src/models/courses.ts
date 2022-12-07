import mongoose from 'mongoose'
import { Course } from '../types/courses'
const { Schema } = mongoose

const courseSchema = new Schema<Course>({
  cover: String,
  title: String,
  description: String,
  comments: [{ body: String, date: String, star: Number }],
  level: String,
  language: String,
  completed: Boolean,
  video: String,
  author: {
    name: String,
    profession: String,
    image: String,
  },
  lessons: [{ time: Number, title: String, description: String }],
})

export const courseModel = mongoose.model('Course', courseSchema)
