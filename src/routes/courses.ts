import express from 'express'
import { insertMock } from '../mocks/courses'
import { filterCourses, getAllCourses, getCourse } from '../services/courses'
import { Filters } from '../types/courses'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const courses = await getAllCourses()
    res.json({ courses })
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const course = await getCourse(req.params.id)
    res.json({ course })
  } catch (error) {
    console.error(error)
  }
})

router.post<string, any, any, Filters>('/filters', async (req, res) => {
  try {
    const courses = await filterCourses(req.body)
    res.json({ courses })
  } catch (error) {
    console.error(error)
  }
})

router.get('/seeder', (_req, res) => {
  insertMock()
  res.send('Proceso finalizado')
})

export default router
