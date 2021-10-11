import { PrismaClient } from '@prisma/client'

export async function GetAllRgs(id) {
  const Prisma = new PrismaClient()
  const data = await Prisma.rg.findMany({
    where: {
      usuarioId: id
    }
  })
  return data
}
