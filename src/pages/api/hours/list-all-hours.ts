import { VercelRequest, VercelResponse } from '@vercel/node'
import moment from 'moment'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { posto } = request.query
  const data = request.body
  
  try {
    const horarios =
      await Prisma.$queryRaw`SELECT DISTINCT * FROM public."Horario" WHERE posto = ${posto} AND data > ${moment().toDate()} AND marcado = 'nao' ORDER BY data`
    console.log(horarios)
    
    return response.status(201).json(horarios)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Erro interno' })
  }
}
