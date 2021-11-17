import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
   try {
      const data = request.body
      await Prisma.rg.create({ 
        data,
        include: {
          usuario: { select : { nome: true }}
        }
      })
      return response.json({ message: "Agendado com sucesso!" })
      
    } catch (error) {
      console.log(error)
      return response.json({message: error})
    }

}
