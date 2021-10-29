import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {

  const usuarios = await Prisma.usuario.findMany()

  return response.json({ usuarios })
}
