import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { local_de_agendamento, data_de_agendamento_inicial, data_de_agendamento_final } =
    request.body

  try {

      const data2 = await Prisma.rg.findMany({
        where: {
          AND: [
            { local_de_agendamento },
            { data_de_agendamento: { gte: data_de_agendamento_inicial } },
            { data_de_agendamento: { lte: data_de_agendamento_final } }
          ]
        }
      })

    return response.status(200).json(data2)
  } catch (error) {
    console.log(error)
    return response.status(401).json({ message: error })
  }
}
