import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {

  const rgs = await Prisma.rg.findMany()

  return response.json({ rgs })
}
