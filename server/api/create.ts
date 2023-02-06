import { usePrisma } from '@sidebase/nuxt-prisma'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  
  const prisma = usePrisma(event)

  return prisma.$executeRaw`CREATE TABLE test;`

})