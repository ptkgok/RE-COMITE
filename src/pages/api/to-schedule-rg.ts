import { VercelRequest, VercelResponse } from "@vercel/node"
import { Prisma } from 'services/utils/prisma-client'

export default async (request:VercelRequest, response:VercelResponse) => {
  
  try {
      const data = request.body
      const rg = await Prisma.rg.create({ 
        data,
        include: {
          usuario: { select : { nome: true }}
        }
      })
      return response.json(rg)
      
    } catch (error) {
      console.log(error)
      return response.json({message: error})
    }
  }