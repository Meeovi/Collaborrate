import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.$queryRaw`SELECT name FROM tables WHERE type = "table";`

    console.log(result)
  }
  
  main()