import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { posto } = request.query
  const data = request.body
  console.log(data)
  try {
    const horarios =
      await Prisma.$queryRaw`SELECT DISTINCT * FROM public."Horario" WHERE posto = ${posto} AND data > '2021-12-01' AND marcado = 'nao' ORDER BY data`
    console.log(horarios)
    return response.status(201).json(horarios)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Erro interno' })
  }
}
