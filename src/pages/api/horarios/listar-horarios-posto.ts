import { VercelRequest, VercelResponse } from "@vercel/node"
import { PrismaClient } from "@prisma/client"
import { Prisma } from "services/utils/prisma-client"

export default async (request:VercelRequest, response:VercelResponse) => {

  const data = request.body
  const dataFormated = await new Date(data.data)
    try {
      const horarios = await Prisma.$queryRaw`SELECT DISTINCT * FROM Hora WHERE posto = ${data.posto}
      AND data>${dataFormated} AND marcado = "" ORDER BY data`;

        console.log(horarios)
      return response.json(horarios)
    } catch (error) {
      return response.status(500).json({ message: "Erro interno", erro: error })
    }
  }