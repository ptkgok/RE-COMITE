import { PrismaClient } from '@prisma/client'

export async function GetAllUsers() {
  const Prisma = new PrismaClient()
  const data = await Prisma.usuario.findMany()
  return data
}