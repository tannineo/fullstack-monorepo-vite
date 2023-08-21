// metadata support, should appear before all other codes
import 'reflect-metadata'

import Fastify from 'fastify'
import fastifyMiddie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import { fileURLToPath } from 'node:url'
import { handler as ssrHandler } from '@my/app'

const app = async () => {
  const app = Fastify({ logger: true })

  // register Astro middleware
  await app
    .register(fastifyStatic, {
      root: fileURLToPath(new URL('../../app/dist/client', import.meta.url)),
      prefix: '/app',
    })
    .register(fastifyMiddie) // enable app.use()
  app.use('/app', ssrHandler)
  // might encounter warning: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  // won't affect functionalities

  // register Fastify routes
  app.register(
    (app, _, done) => {
      app.get('/', (req, reply) => {
        reply.send('Hey! Change me to see updates, fastify!~')
      })

      app.get('/ping', (req, reply) => {
        reply.send({ msg: 'pong' })
      })

      app.get('/pong', (req, reply) => {
        reply.send({ msg: 'ping' })
      })

      done()
    },
    { prefix: '/api' },
  )

  if (import.meta.env.PROD)
    app.listen({
      port: 3000,
    })

  return app
}

// export name is configured in `vite.config.ts`
export const server = app()
