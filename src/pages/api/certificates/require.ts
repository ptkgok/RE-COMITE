import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const data = request.body
    console.log(data)

    const certidao = await Prisma.certidao.create({
      data,
      include: { usuario: data.usuarioId }
    })

    return response.json(certidao)
  } catch (error) {
    console.log(error)
    return response.json({ message: error })
  }
}
