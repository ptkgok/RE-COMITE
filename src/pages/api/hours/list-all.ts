import { VercelRequest, VercelResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const data = await Prisma.horario.findMany({
      select: { posto: true, data: true }
    })
    return response.status(201).json(data)
  } catch (error) {
    return response.status(500).json({ message: 'Erro interno' })
  }
}
