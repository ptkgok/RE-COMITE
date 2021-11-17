import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { status, data_de_solicitacao_inicial, data_de_solicitacao_final, orgao } =
    request.body

  try {
    const data =
      await Prisma.$queryRaw`SELECT * from "Rg" WHERE status 
      like ${status} and orgao like ${orgao} and data_de_solicitacao between ${data_de_solicitacao_inicial} 
      and ${data_de_solicitacao_final} order by data_de_solicitacao, nome_completo asc`
    
    return response.status(200).json(data)
  } catch (error) {
    console.log(error)
    return response.status(401).json({ message: error })
  }
}
