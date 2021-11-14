import { VercelRequest, VercelResponse } from "@vercel/node"
import { PrismaClient } from "@prisma/client"
import { Prisma } from "services/utils/prisma-client"
import moment from "moment"

export default async (request: VercelRequest, response: VercelResponse) => {
  const data = request.body

  try {
    const hour = await Prisma.horario.create({
      data: {
        posto: data.posto,
        hora: data.hora,
        data: moment(data.data).toISOString(),
        dia: Number(data.dia),
        dianome: data.dianome,
        marcado: data.marcado,
      }
    })

    return response.status(201).json(hour)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: "Erro interno" })
  }
}