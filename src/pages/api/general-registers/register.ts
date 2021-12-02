import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {

  const { id } = request.query

  const registro = await Prisma.rg.findUnique({ where: { id } })

  return response.json({ registro })
}
