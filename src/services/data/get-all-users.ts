import { PrismaClient } from '@prisma/client';
export async function GetAllUsers() {
  const prisma = new PrismaClient()
  const data = await prisma.usuario.findMany()
  return data
}