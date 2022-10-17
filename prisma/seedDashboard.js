const {
  PrismaClient
} = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

async function main() {
<<<<<<< HEAD
  const postgresql = await prisma.dashboards.upsert({
    where: {
      name: 'PostgreSQL'
    },
    update: {},
    create: {
      logo: '',
      name: 'PostgreSQL',
      content: '',
    },
  })
  const grpc = await prisma.dashboards.upsert({
    where: {
      name: 'gRPC'
    },
    update: {},
    create: {
      logo: '',
      name: 'gRPC',
      content: '',
    },
  })
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
<<<<<<< HEAD
  const soap = await prisma.dashboards.upsert({
    where: {
      name: 'SOAP'
    },
    update: {},
    create: {
      logo: '',
      name: 'SOAP',
      content: '',
    },
  })
  const awss3 = await prisma.dashboards.upsert({
    where: {
      name: 'AWS S3'
    },
    update: {},
    create: {
      logo: '',
      name: 'AWS S3',
      content: '',
    },
  })
  const oracledb = await prisma.dashboards.upsert({
    where: {
      name: 'OracleDB'
    },
    update: {},
    create: {
      logo: '',
      name: 'OracleDB',
      content: '',
    },
  })
  const sqlserver = await prisma.dashboards.upsert({
    where: {
      name: 'SQL Server'
    },
    update: {},
    create: {
      logo: '',
      name: 'SQL Server',
      content: '',
    },
  })
  const odata = await prisma.dashboards.upsert({
    where: {
      name: 'OData'
    },
    update: {},
    create: {
      logo: '',
      name: 'OData',
      content: '',
    },
  })
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
<<<<<<< HEAD
  const thrift = await prisma.dashboards.upsert({
    where: {
      name: 'Apache Thrift'
    },
    update: {},
    create: {
      logo: '',
      name: 'Apache Thrift',
      content: '',
    },
  })
  const slack = await prisma.dashboards.upsert({
    where: {
      name: 'Slack'
    },
    update: {},
    create: {
      logo: '',
      name: 'Slack',
      content: '',
    },
  })
  const asana = await prisma.dashboards.upsert({
    where: {
      name: 'Asana'
    },
    update: {},
    create: {
      logo: '',
      name: 'Asana',
      content: '',
    },
  })
  const stripe = await prisma.dashboards.upsert({
    where: {
      name: 'Stripe'
    },
    update: {},
    create: {
      logo: '',
      name: 'Stripe',
      content: '',
    },
  })
  const sqlite = await prisma.dashboards.upsert({
    where: {
      name: 'SQLite'
    },
    update: {},
    create: {
      logo: '',
      name: 'SQLite',
      content: '',
    },
  })
  const neo4j = await prisma.dashboards.upsert({
    where: {
      name: 'Neo4j'
    },
    update: {},
    create: {
      logo: '',
      name: 'Neo4j',
      content: '',
    },
  })
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
<<<<<<< HEAD
  const typesense = await prisma.dashboards.upsert({
    where: {
      name: 'Typesense'
    },
    update: {},
    create: {
      logo: '',
      name: 'Typesense',
      content: '',
    },
  })
  const meilisearch = await prisma.dashboards.upsert({
    where: {
      name: 'Meilisearch'
    },
    update: {},
    create: {
      logo: '',
      name: 'Meilisearch',
      content: '',
    },
  })
  const algolia = await prisma.dashboards.upsert({
    where: {
      name: 'Algolia'
    },
    update: {},
    create: {
      logo: '',
      name: 'Algolia',
      content: '',
    },
  })
  const elasticsearch = await prisma.dashboards.upsert({
    where: {
      name: 'ElasticSearch'
    },
    update: {},
    create: {
      logo: '',
      name: 'ElasticSearch',
      content: '',
    },
  })
  const opensearch = await prisma.dashboards.upsert({
    where: {
      name: 'OpenSearch'
    },
    update: {},
    create: {
      logo: '',
      name: 'OpenSearch',
      content: '',
    },
  })
  const itemsapi = await prisma.dashboards.upsert({
    where: {
      name: 'itemsAPI'
    },
    update: {},
    create: {
      logo: '',
      name: 'itemsAPI',
      content: '',
    },
  })
  const redis = await prisma.dashboards.upsert({
    where: {
      name: 'Redis'
    },
    update: {},
    create: {
      logo: '',
      name: 'Redis',
      content: '',
    },
  })
  const mysql = await prisma.dashboards.upsert({
    where: {
      name: 'MySQL'
    },
    update: {},
    create: {
      logo: '',
      name: 'MySQL',
      content: '',
    },
  })
  const mongodb = await prisma.dashboards.upsert({
    where: {
      name: 'MongoDB'
    },
    update: {},
    create: {
      logo: '',
      name: 'MongoDB',
      content: '',
    },
  })
  const couchdb = await prisma.dashboards.upsert({
    where: {
      name: 'CouchDB'
    },
    update: {},
    create: {
      logo: '',
      name: 'CouchDB',
      content: '',
    },
  })
  const hasura = await prisma.dashboards.upsert({
    where: {
      name: 'Hasura'
    },
    update: {},
    create: {
      logo: '',
      name: 'Hasura',
      content: '',
    },
  })
  const supabase = await prisma.dashboards.upsert({
    where: {
      name: 'Supabase'
    },
    update: {},
    create: {
      logo: '',
      name: 'Supabase',
      content: '',
    },
  })
  const deployment = await prisma.dashboards.upsert({
    where: {
      name: 'Deployment Dashboard'
    },
    update: {},
    create: {
      logo: '',
      name: 'Deployment Dashboard',
      content: '',
    },
  })
  const airtable = await prisma.dashboards.upsert({
    where: {
      name: 'Airtable'
    },
    update: {},
    create: {
      logo: '',
      name: 'Airtable',
      content: '',
    },
  })
  const dynamodb = await prisma.dashboards.upsert({
    where: {
      name: 'DynamoDB'
    },
    update: {},
    create: {
      logo: '',
      name: 'DynamoDB',
      content: '',
    },
  })
  const firestore = await prisma.dashboards.upsert({
    where: {
      name: 'Firestore'
    },
    update: {},
    create: {
      logo: '',
      name: 'Firestore',
      content: '',
    },
  })
  const openapi = await prisma.dashboards.upsert({
    where: {
      name: 'OpenAPI'
    },
    update: {},
    create: {
      logo: '',
      name: 'OpenAPI',
      content: '',
    },
  })
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
  console.log({
<<<<<<< HEAD
    postgresql,
    grpc,
    json,
    soap,
    awss3,
    oracledb,
    sqlserver,
    odata,
    graphql,
    restapi,
    thrift,
    slack,
    asana,
    stripe,
    sqlite,
    neo4j,
    peopledashboard,
    metrics,
    typesense,
    meilisearch,
    algolia,
    elasticsearch,
    opensearch,
    itemsapi,
    redis,
    mysql,
    mongodb,
    couchdb,
    hasura,
    supabase,
    deployment,
    airtable,
    dynamodb,
    firestore,
    openapi,
=======
    json,
    graphql,
    restapi,
    peopledashboard,
    metrics,
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    deepdive,
    gemba
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
