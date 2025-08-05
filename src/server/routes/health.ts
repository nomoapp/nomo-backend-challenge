import { Router } from 'express'

const healthRouter = Router()

healthRouter.get('/', (req, res) => {
  // BUG INTRODUCIDO: Intentar acceder a una propiedad de undefined
  const uptime = process.uptime()
  const status = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(uptime),
    // ERROR: Intentando acceder a req.query.details sin verificar si existe
    details: req.query.details?.toString().toUpperCase() || 'BASIC'
  }
  
  res.json(status)
})

export { healthRouter }