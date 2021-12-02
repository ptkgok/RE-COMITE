import { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { nome, email, senha, tipo_do_usuario, orgaoId } = request.body
  try {
    await new PrismaClient().usuario.create({
      data: {
        nome,
        senha: bcrypt.hashSync(senha, 8),
        email,
        tipo_do_usuario,
        orgao: {
          connect: { id: orgaoId }
        }
      }
    })

    return response.status(200).json({
      message: 'Usuario Criado com sucesso!'
    })
  } catch (error) {
    if (error.code === 'P2002') {
      return response.status(400).json({
        message: `${error.meta.target[0]} já está cadastrado`
      })
    }
  }
}
