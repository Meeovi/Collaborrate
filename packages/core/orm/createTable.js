import { usePrisma } from '@sidebase/nuxt-prisma'

async function createTable() {
    const prisma = usePrisma()

    return prisma.$executeRaw`Create table tableName`;
}

export default createTable();