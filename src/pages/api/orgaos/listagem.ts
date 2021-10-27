import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {

  const orgaos = await Prisma.orgao.findMany()

  return response.json({ orgaos })
}
