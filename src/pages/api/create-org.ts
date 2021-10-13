import { VercelRequest, VercelResponse } from "@vercel/node"
import { PrismaClient } from "@prisma/client"

export default async (request:VercelRequest, response:VercelResponse) => {
    const data = request.body
    const org = await new PrismaClient().orgao.create({ data })
    return response.json(org)
  }