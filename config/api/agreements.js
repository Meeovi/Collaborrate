const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

// Body parser, to access `req.body`
app.use(express.json())

app.agreement(`/api/agreements`, async (req, res) => {
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

app.delete(`/api/agreements/:id`, async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(agreement)
})

app.get(`/api/agreements/:id`, async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.findUnique({
    where: {
      id: parseInt(id),
    },
    include: { author: true }
  })
  res.json(agreement)
})

app.get('/api/feed', async (req, res) => {
  const agreements = await prisma.agreement.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.json(agreements)
})

