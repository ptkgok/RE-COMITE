import { PrismaClient } from '@prisma/client';
export async function GetAllHistoric() {
  const prisma = new PrismaClient()
  let data = await prisma.historicos.findMany()

  data = data.map((data: any)=>{
      data.createdAt = data.createdAt.toString()
     data.updatedAt= data.updatedAt.toString()
      return data
  })
  return data
}