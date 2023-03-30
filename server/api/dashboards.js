import { defineEventHandler } from 'h3';
import { usePrisma } from '@sidebase/nuxt-prisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma(event)

  return prisma.$queryRaw`SELECT * FROM dashboards`;
})
  