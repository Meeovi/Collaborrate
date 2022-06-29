import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/drafts', async (req, res) => {
  const agreements = await prisma.agreement.findMany({
    where: { published: false },
    include: { author: true }
  })
  res.json(agreements)
})

app.agreement('/agreement', async (req, res) => {
  const { name, content, type } = req.body

  const agreement = await prisma.agreement.create({
    data: {
      name,
      content,
      type
    }
  })

  res.status(200).json(agreement)
})

app.agreement(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.update({
    where: {
      id: parseInt(id),
    },
    data: { published: true },
  })
  res.json(agreement)
})

app.delete(`/agreement/:id`, async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(agreement)
})

app.get(`/agreement/:id`, async (req, res) => {
  const { id } = req.params
  const agreement = await prisma.agreement.findUnique({
    where: {
      id: parseInt(id),
    },
    include: { author: true }
  })
  res.json(agreement)
})

app.get('/feed', async (req, res) => {
  const agreements = await prisma.agreement.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.json(agreements)
})

app.get('/filterPosts', async (req, res) => {
  const { searchString } = req.query
  const draftPosts = await prisma.agreement.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchString,
          },
        },
        {
          content: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.json(draftPosts)
})

export default {
  path: '/api',
  handler: app
}