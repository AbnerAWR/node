import { Router } from 'express'

const productRouter = Router()

const router = Router()

productRouter.use('/product', router)

router.get('/', (req, res) => {
  res.send('Produto')
})

router.get('/:id', (req, res) => {
  res.send('Get Produto' + req.params.id)
})

export default productRouter
