import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import prom from "prom-client";

const app = express();
const port = 4001;
const prisma = new PrismaClient();

const register = new prom.Registry();
prom.collectDefaultMetrics({ register });

app.get('/metrics', async (_req, res: Response) => {
  let prismaMetrics = await prisma.$metrics.prometheus();
  let appMetrics = await register.metrics();
  res.end(prismaMetrics + appMetrics);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})