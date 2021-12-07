import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

interface IAddress {
  email: string
  name: string
}

export interface IMessage {
  to: IAddress
  from: IAddress
  subject: string
  body: string
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>
}

export class MailtrapMailProvider implements IMailProvider {
  public transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      auth: {
        user: 'sande@identidadedoc.online',
        pass: 'Perito25'
      }
    })
  }

  public async sendMail(message: IMessage): Promise<void> {
    console.log(message)
    try {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email
        },
        from: {
          name: message.from.name,
          address: 'sande@identidadedoc.online'
        },
        subject: message.subject,
        html: message.body
      })
    } catch (error) {
      console.log('[Error Returned at sendmail]')
      console.log(error)
    }
  }
}
