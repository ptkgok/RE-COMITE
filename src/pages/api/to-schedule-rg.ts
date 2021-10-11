import { VercelRequest, VercelResponse } from "@vercel/node"
import { Prisma } from 'services/utils/prisma-client'

export default async (request:VercelRequest, response:VercelResponse) => {
    const data = request.body
    console.log(data)
    const rg = await Prisma.rg.create({
      data
    })
    return response.json(rg)
  }