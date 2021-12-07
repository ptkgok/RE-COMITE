import { PrismaClient } from '@prisma/client'

export async function getAllCertSolicitation() {
  const Prisma = new PrismaClient()
  const data = await Prisma.certidao.findMany()
  return data
}
