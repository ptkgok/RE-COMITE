import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const { id } = request.query

    const certidao = await Prisma.certidao.findUnique({ where: { id } })

    return response.json(certidao)
  } catch (error) {
    console.log(error)
    return response.json({ message: error })
  }
}
