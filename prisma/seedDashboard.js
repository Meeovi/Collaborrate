const {
  PrismaClient
} = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

async function main() {
  const json = await prisma.dashboards.upsert({
    where: {
      name: 'JSON Schema'
    },
    update: {},
    create: {
      logo: '',
      name: 'JSON Schema',
      content: '',
    },
  })
  const graphql = await prisma.dashboards.upsert({
    where: {
      name: 'GraphQL'
    },
    update: {},
    create: {
      logo: '',
      name: 'GraphQL',
      content: '',
    },
  })

  const restapi = await prisma.dashboards.upsert({
    where: {
      name: 'REST API'
    },
    update: {},
    create: {
      logo: '',
      name: 'REST API',
      content: '',
    },
  })
  const peopledashboard = await prisma.dashboards.upsert({
    where: {
      name: 'People Dashboard'
    },
    update: {},
    create: {
      logo: '',
      name: 'People Dashboard',
      content: '',
    },
  })
  const metrics = await prisma.dashboards.upsert({
    where: {
      name: 'Metrics'
    },
    update: {},
    create: {
      logo: '',
      name: 'Metrics',
      content: '',
    },
  })
  const deepdive = await prisma.dashboards.upsert({
    where: {
      name: 'Deep Dive'
    },
    update: {},
    create: {
      logo: '',
      name: 'Deep Dive',
      content: '',
    },
  })
  const gemba = await prisma.dashboards.upsert({
    where: {
      name: 'Gemba Dashboard'
    },
    update: {},
    create: {
      logo: '',
      name: 'Gemba Dashboard',
      content: '',
    },
  })
  const slides = await prisma.dashboards.upsert({
    where: {
      name: 'Slides'
    },
    update: {},
    create: {
      logo: '',
      name: 'Slides',
      content: '',
    },
  })
  console.log({
    json,
    graphql,
    restapi,
    peopledashboard,
    metrics,
    deepdive,
    gemba,
    slides
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
