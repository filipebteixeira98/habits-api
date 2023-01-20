import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()

const prisma = new PrismaClient()

app.register(cors)

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Habits'
      }
    }
  })

  return habits
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀 Server running at http://localhost:3333')
})
