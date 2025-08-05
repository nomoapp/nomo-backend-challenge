// import { SERVICE_NAME, LOG_LEVEL } from '@config'
import pino from 'pino'

export const logger = pino({
  // name: SERVICE_NAME,
  // level: LOG_LEVEL
  name: 'nomo-backend-challenge',
  level: 'info' // Valid values 'fatal', 'error', 'warn', 'info', 'debug', 'trace' or 'silent'
})
