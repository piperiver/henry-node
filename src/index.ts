import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import diaryRouter from './routes/courses'

// init mongoose
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.np9h5zk.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() => {
    console.log('Base de datos conectada')
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', true)
    }
  })
  .catch((e) => console.log(e))

//init express
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/ping', (_, res) => {
  res.send('pong!!')
})


app.get("/", (_req, res) => {
  res.json({ message: "ok" });
});


app.listen(PORT, () => {
  console.log(`Server running in port http://localhost:${PORT}`)
})

app.use('/courses', diaryRouter)
