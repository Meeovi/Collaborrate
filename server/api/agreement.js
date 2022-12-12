const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

// Body parser, to access `req.body`
app.use(express.json())

app.get('/api/drafts', async (req, res) => {
  const agreements = await prisma.agreement.findMany({
    where: { published: false },
    include: { author: true }
  })
  res.json(agreements)
})

app.post(`/api/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
})

app.post(`/api/agreement`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.agreement.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

app.delete(`/api/agreement/:id`, async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(agreement)
})

app.get(`/api/agreement/:id`, async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.findUnique({
    where: {
      id: parseInt(id),
    },
    include: { author: true }
  })
  res.json(agreement)
})

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(8001)
console.log('Server is listening on http://localhost:8001')