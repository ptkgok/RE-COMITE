import { MailtrapMailProvider, IMessage } from '@services/utils/mailer'
import { VercelRequest, VercelResponse } from '@vercel/node'

class SendMailController {
  public async send(Request: VercelRequest, Response: VercelResponse) {
    try {
      const data = Request.body
      console.log(data)

      const Mail: IMessage = {
        to: {
          name: data.email_do_solicitante.split('.')[0],
          email: data.email_do_solicitante
        },
        from: {
          name: data.Orgao,
          email: 'sande@identidadedoc.online'
        },
        subject: 'Resposta de Solicitação de dados',
        body: `
        <div style="display: flex;">
        <img style="width: 100px;" src="https://sisrg.vercel.app/static/media/logo.aa6e7f41.svg" />
        </div>
        <br />
        <br />
        <h1>Resposta de Solicitação de dados</h1>
               <ul>
                <li>Distrito: ${data.distrito}</li>
                <li>Comarca: ${data.comarca}</li>
                <li>Livro: ${data.livro}</li>
                <li>Folha: ${data.folha}</li>
                <li>Termo: ${data.termo}</li>
                <li>RG: ${data.rg}</li>
                <li>Resposta: ${data.resposta}</li>
                <li>Tipo de certidão: ${data.tipo_de_certidao}</li>
                <li>Observação: ${data.observacao}</li>
                <li>Email Do Solicitante: ${data.email_do_solicitante} </li>
                <li>Estado De Naturalidade: ${data.estado_de_naturalidade} </li>
                <li>Estado de Registro: ${data.estado_de_registro}</li>
               </ul>
        `
      }

      await new MailtrapMailProvider().sendMail(Mail)

      Response.send(200)
    } catch (error) {
      console.log(error)
      Response.status(501)
    }
  }
}

export default new SendMailController()
