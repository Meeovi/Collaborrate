import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
    const agreement = await prisma.agreements.update({
        where: { id: 6 },
        data: {
            name: '',
            excerpt: '',
            content: '',
            type: ''
          },
    })
  
    console.dir(agreement, { depth: null })
  }

main()
