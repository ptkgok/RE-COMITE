import { VercelRequest, VercelResponse } from "@vercel/node"
import { PrismaClient } from "@prisma/client"
import { Prisma } from "services/utils/prisma-client"

export default async (request:VercelRequest, response:VercelResponse) => {

  const data = request.body
  const dataFormatada = new Date(data.data)
  

    try {
      const horarios = await Prisma.$queryRaw`SELECT DISTINCT * FROM Hora WHERE posto = ${data.posto}
      AND data>${data.data} AND marcado = "" ORDER BY data`;


      return response.json(horarios)
    } catch (error) {
      return response.status(500).json({ message: "Erro interno", erro: error })
    }
  }