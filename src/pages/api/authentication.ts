import { VercelRequest, VercelResponse } from '@vercel/node'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { email, senha } = request.body

  const user = await Prisma.usuario.findFirst({ where: { email }, select: {
    orgao: true,
    nome: true,
    senha: true,
    id: true,
    email: true,
    tipo_do_usuario: true,
  } })

  if (!user) return response.json({ message: 'Usuario não encontrado' })
  if (!(await bcrypt.compare(senha, user?.senha)))
    return response.json({ message: 'senha errada' })
  delete user.senha

  const token = jwt.sign({ id: user.id }, `${process.env.TOKEN_SECRET}`, {
    expiresIn: '1d'
  })

  return response.json({ user, token })
}
