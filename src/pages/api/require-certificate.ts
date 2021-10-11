import { VercelRequest, VercelResponse } from "@vercel/node"
import { Prisma } from 'services/utils/prisma-client'

export default async (request:VercelRequest, response:VercelResponse) => {
    const data = request.body
    console.log(data)
    const certidao = await Prisma.certidao.create({ data })
    return response.json(certidao)
  }