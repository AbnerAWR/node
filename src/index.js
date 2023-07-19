import express from 'express'
import { routerLoader } from './routerLoader.js'

const app = express()

routerLoader(app)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
