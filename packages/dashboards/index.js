const airtable = require('./airtable/index')
const algolia = require('./algolia/index')
const asana = require('./asana/index')
const awss3 = require('./awss3/index')
const couchdb = require('./couchdb/index')
const deepdive = require('./deepdive/index')
const deploymentdashboard = require('./deploymentdashboard/index')
const dynamodb = require('./dynamodb/index')
const elasticsearch = require('./elasticsearch/index')
const firestore = require('./firestore/index')
const gembadashboard = require('./gembadashboard/index')
const graphql = require('./graphql/index')
const grpc = require('./grpc/index')
const hasura = require('./hasura/index')
const itemsapi = require('./itemsapi/index')
const json = require('./json/index')
const meilisearch = require('./meilisearch/index')
const metrics = require('./metrics/index')
const mongodb = require('./mongodb/index')
const mysql = require('./mysql/index')
const newrelic = require('./newrelic/index')
const odata = require('./odata/index')
const openapi = require('./openapi/index')
const opensearch = require('./opensearch/index')
const oracledb = require('./oracledb/index')
const paypal = require('./paypal/index')
const peopledashboard = require('./peopledashboard/index')
const postgresql = require('./postgresql/index')
const redis = require('./redis/index')
const restapi = require('./restapi/index')
const slack = require('./slack/index')
const sqlite = require('./sqlite/index')
const sqlserver = require('./sqlserver/index')
const stripe = require('./stripe/index')
const supabase = require('./supabase/index')
const typesense = require('./typesense/index')

module.exports = () => {
    airtable,
    algolia,
    asana,
    awss3,
    couchdb,
    deepdive,
    deploymentdashboard,
    dynamodb,
    elasticsearch,
    firestore,
    gembadashboard,
    graphql,
    grpc,
    hasura,
    itemsapi,
    json,
    meilisearch,
    metrics,
    mongodb,
    mysql,
    newrelic,
    odata,
    openapi,
    opensearch,
    oracledb,
    paypal,
    peopledashboard,
    postgresql,
    redis,
    restapi,
    slack,
    sqlite,
    sqlserver,
    stripe,
    supabase,
    typesense
}