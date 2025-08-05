import { Router } from 'express'
import { tasksControllers } from '@controllers'
// RETO 6: Importar y aplicar middleware de autenticación

const tasksRouter = Router()

// RETO 5: Este endpoint necesita filtros y paginación
tasksRouter.get('/', tasksControllers.getAllTasks)

// RETO 4: Implementar este endpoint
// router.put('/:id', tasksControllers.updateTask)

tasksRouter.post('/', tasksControllers.createTask)
tasksRouter.delete('/:id', tasksControllers.deleteTask)

// RETO 3: Este endpoint tiene un bug en la consulta SQL
tasksRouter.get('/user/:userId', tasksControllers.getUserTasks)

export { tasksRouter}