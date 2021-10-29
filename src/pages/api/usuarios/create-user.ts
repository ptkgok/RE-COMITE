import { VercelRequest, VercelResponse } from "@vercel/node"
import bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client"

export default async (request:VercelRequest, response:VercelResponse) => {

    const {nome, email, senha, tipo_do_usuario} = request.body
  
    const user = await new PrismaClient().usuario.create({
        data: {
            nome,
            senha: bcrypt.hashSync(senha, 8),
            email,
            tipo_do_usuario
        }
    })
    
    return response.json({
        message: "Usuario Criado com sucesso!"
    })
  }