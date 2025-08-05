import { Router } from 'express'
import { usersControllers } from '@controllers'
import { validateUser } from '@middleware'

const usersRouter = Router()

// RETO 2: Este endpoint necesita validación
usersRouter.post('/', validateUser, usersControllers.createUser)

usersRouter.get('/', usersControllers.getAllUsers)

export { usersRouter }
