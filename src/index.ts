import { logger } from '@logger'
import { runServer, stopServer } from '@server'

const startApplication = async () => {
  try {
    runServer()
  } catch (error) {
    logger.error({ message: (<Error>error).message }, 'Application stating error')
  }
}

const closeApplication = async () => {
  stopServer()
  logger.info('Service successfully closed.')
}

process.on('SIGINT', async () => closeApplication())
process.on('SIGTERM', async () => closeApplication())

startApplication()
