import { Router } from 'express'
import { MovieController } from '../controllers/movies-controller.js'

export const moviesRouters = Router()
moviesRouters.get('/', MovieController.getAll)
moviesRouters.post('/', MovieController.create)

moviesRouters.get('/:id', MovieController.getById)
moviesRouters.delete('/:id', MovieController.delete)
moviesRouters.patch('/:id', MovieController.update)
