import { VercelRequest, VercelResponse } from "@vercel/node"
import { Prisma } from "services/utils/prisma-client"

export default async (request: VercelRequest, response: VercelResponse) => {

  const data = request.body
  console.log(data.posto)
  try {
    const horarios = await Prisma.$queryRaw`SELECT DISTINCT * FROM Horario WHERE posto = ${data.posto}
      AND data>${data.data} AND marcado = "" ORDER BY data`;

    console.log(horarios)
    return response.json(horarios)
  } catch (error) {
    return response.status(500).json({ message: "Erro interno", erro: error })
  }
}