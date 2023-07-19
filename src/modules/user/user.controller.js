import { Router } from 'express'

const userRouter = Router()

const router = Router()

userRouter.use('/user', router)

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/:id', (req, res) => {
  res.send('Olá Usuario!' + req.params.id)
})

export default userRouter
