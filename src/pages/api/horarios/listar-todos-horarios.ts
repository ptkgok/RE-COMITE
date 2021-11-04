import { VercelRequest, VercelResponse } from "@vercel/node"
import { PrismaClient } from "@prisma/client"
import { Prisma } from "services/utils/prisma-client"

export default async (request:VercelRequest, response:VercelResponse) => {
    try {
      const data = await Prisma.horario.findMany()
      return response.json(data)
    } catch (error) {
      return response.status(500).json({ message: "Erro interno" })
    }
  }