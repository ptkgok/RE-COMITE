import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const data = request.body
    const {id} = request.query

    await Prisma.rg.create({ data })

    await Prisma.horario.update({
      data: { marcado: 'sim' },
      where: { id: Number(id) }
    })

    return response.json({ message: 'Agendado com sucesso!' })
  } catch (error) {
    console.log(error)
    return response.json({ message: error })
  }
}
