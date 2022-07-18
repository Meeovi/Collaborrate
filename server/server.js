import express from 'express'

const app = express()
app.use(express.json())

const schema = await buildSchema({
  resolvers: ["../config/api/*.{ts,js}"],
});

export default {
  path: '/api',
  handler: app
}