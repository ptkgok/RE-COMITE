import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const data = request.body
  const {id} = request.query

  await Prisma.rg.update({ data, where: { id } })

  return response.json({ message: "Atualizado com sucesso!" })
}
