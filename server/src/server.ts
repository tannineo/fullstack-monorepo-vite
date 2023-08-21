// metadata support, should appear before all other codes
import 'reflect-metadata'

import Fastify from 'fastify'

const app = async () => {
  const app = Fastify()

  app.get('/', (req, reply) => {
    reply.send('Hey! Change me to see updates, fastify!~')
  })

  app.get('/ping', (req, reply) => {
    reply.send({ msg: 'pong' })
  })

  app.get('/pong', (req, reply) => {
    reply.send({ msg: 'ping' })
  })

  if (import.meta.env.PROD)
    app.listen({
      port: 3000,
    })

  return app
}

// export name is configured in `vite.config.ts`
export const server = app()
