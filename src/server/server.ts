import { createServer } from 'http'
import express from 'express'
import type { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { Pool } from 'pg'
import { logger } from '@logger'

// Routes
import { healthRouter } from './routes/health'
import { usersRouter } from './routes/users'
import { tasksRouter } from './routes/tasks'

const app = express()
const PORT = process.env.PORT || 3000

// Database connection
export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'task_management',
  user: 'admin',
  password: 'password',
})

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// Routes
app.use('/health', healthRouter)
app.use('/api/users', usersRouter)
app.use('/api/tasks', tasksRouter)

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

export const server = createServer(app)

export const runServer = () => server.listen(PORT, () => logger.info(`Server running in http://localhost:${PORT}`))

export const stopServer = () => {
  logger.info('Closing sever...')
  server.close()
}
