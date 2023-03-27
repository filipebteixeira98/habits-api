import { FastifyInstance } from 'fastify'

import { prisma } from './lib/prisma'

export async function appRoutes(app: FastifyInstance) {
  app.get('/habits', async () => {
    const habits = await prisma.habit.findMany({
      where: {
        title: {
          startsWith: 'Habits',
        },
      },
    })

    return habits
  })
}
