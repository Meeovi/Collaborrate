<<<<<<< HEAD
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
=======
>>>>>>> 209f866c3750683de0832a1bde6e69efde6e35a2
