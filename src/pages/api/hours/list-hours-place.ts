import { VercelRequest, VercelResponse } from '@vercel/node'
import moment from 'moment'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const data = request.body
  console.log(new Date(data.data).getDate())
  try {
    // const horarios = await Prisma.$queryRaw`SELECT DISTINCT * FROM Horario WHERE posto = ${data.posto}
    //   AND data>${data.data} AND marcado = "" ORDER BY data`;
    const horarios = await Prisma.horario.findMany({
      where: {
        AND: [
          { posto: data.posto },
          { data: { gt: new Date().toISOString() } },
          { marcado: 'nao' }
        ]
      },
      orderBy: { data: 'asc' }
    })

    console.log(horarios)
    return response.json(horarios)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Erro interno', erro: error })
  }
}
