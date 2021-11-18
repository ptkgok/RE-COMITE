import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { local_de_agendamento, data_de_agendamento_inicial, data_de_agendamento_final } =
    request.body

  try {
    const data =
      await Prisma.$queryRaw`SELECT * from "Rg" WHERE local_de_agendamento 
      like ${local_de_agendamento} and 
      data_de_agendamento between ${data_de_agendamento_inicial} 
      and ${data_de_agendamento_final} 
      order by data_de_agendamento`

      const data2 = await Prisma.rg.findMany({
        where: {
          AND: [
            { local_de_agendamento },
            { data_de_agendamento: { gte: data_de_agendamento_inicial } },
            { data_de_agendamento: { lte: data_de_agendamento_final } },
          ],
        }
      })
    console.log(data2)
    return response.status(200).json(data)
  } catch (error) {
    console.log(error)
    return response.status(401).json({ message: error })
  }
}
