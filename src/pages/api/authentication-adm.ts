import { VercelRequest, VercelResponse } from '@vercel/node'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { email, senha } = request.body

  const usuario = await Prisma.usuario.findFirst({
    where: { email, AND : { tipo_do_usuario: 'ADMIN' } },
    select: {
      orgao: true,
      nome: true,
      senha: true,
      id: true,
      email: true,
      tipo_do_usuario: true
    }
  })

  if (!usuario) return response.json({ message: 'Usuario não encontrado' })
  if (!(await bcrypt.compare(senha, usuario?.senha)))
    return response.json({ message: 'senha errada' })
  delete usuario.senha

  const token = jwt.sign({ id: usuario.id }, `${process.env.TOKEN_SECRET}`, {
    expiresIn: '1d'
  })

  return response.json({ usuario, token })
}
