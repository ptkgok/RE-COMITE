import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {

  const roles = await Prisma.usuario.findMany({ select: { tipo_do_usuario: true } })

  return response.json({ roles })
}
