import React, { useContext, useEffect } from 'react'
import { Button, Input, Select, TextArea } from 'atoms'
import axios from 'axios'
import { DoubleElementsInRow } from 'layouts/common'
import { useForm } from 'react-hook-form'
import { BiSend, BiWindowOpen } from 'react-icons/bi'
import * as O from '../left-center-right'
import { AuthContext } from 'contexts/Authentication/AuthContext'
import { parseCookies } from 'nookies'

const FormSolicitarCertidao: React.FC = ({ id }) => {
  const { register, handleSubmit } = useForm()
  const { ['@IIPM/user']: userString }: any = parseCookies()
  const [people, setPeople]: any[] = React.useState([])

  const user = userString ? JSON.parse(userString) : null

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/certificates/list-by-id?id=' + id)

      setPeople(data)
    })()
  }, [])

  const onSubmit = async payload => {
    const { data: certificateUpdated } = await axios.put(
      '/api/certificates/require',
      payload
    )
    const { data: mailSended } = await axios.post('/api/certificates/mailer')

    console.log(certificateUpdated)
    console.log(mailSended)
  }

  return (
    <O.Container onSubmit={handleSubmit(onSubmit)}>
      <O.LeftSide>
        <Input
          title="Nome Completo"
          reg={{ ...register('nome_completo') }}
          defaultValue={people.nome_completo}
          required
        />
        <Input
          title="Nome da Mãe"
          reg={{ ...register('nome_da_mae') }}
          defaultValue={people.nome_da_mae}
          required
        />
        <Input
          title="Nome do Pai"
          reg={{ ...register('nome_do_pai') }}
          defaultValue={people.nome_do_pai}
          required
        />
        <DoubleElementsInRow>
          <Input
            title="CPF"
            reg={{ ...register('cpf') }}
            defaultValue={people.cpf}
          />
          <Input
            title="RG"
            reg={{ ...register('rg') }}
            defaultValue={people.rg}
          />
        </DoubleElementsInRow>
      </O.LeftSide>
      <O.CenterSide>
        <DoubleElementsInRow>
          <Input
            title="Orgão Solicitante"
            type="text"
            reg={{ ...register('orgao') }}
            defaultValue={
              user?.orgao?.length > 0 ? `${user.orgao[0].nome}` : 'Nenhum'
            }
            // disabled
          />
          <Input
            title="Data de Solicitação"
            reg={{ ...register('data_de_solicitacao') }}
            defaultValue={people?.data_de_solicitacao}
          />
        </DoubleElementsInRow>
        <Input
          title="Email do Solicitante"
          defaultValue={people?.email_do_solicitante}
          reg={{ ...register('email_do_solicitante') }}
        />
        <DoubleElementsInRow>
          <Select
            title="Status"
            reg={{ ...register('status') }}
            options={[{ id: 1, label: 'Solicitado', value: 'Solicitado' }]}
            defaultValue={people?.status}
          />
          <Input
            title="Data de Nascimento"
            reg={{ ...register('data_de_nascimento') }}
            defaultValue={people?.data_de_nascimento}
          />
        </DoubleElementsInRow>
        <DoubleElementsInRow>
          <Input
            title="Estado de Naturalidade"
            reg={{ ...register('estado_de_naturalidade') }}
            defaultValue={people?.estado_de_naturalidade}
          />

          <Input
            title="Cidade de Naturalidade"
            reg={{ ...register('cidade_de_naturalidade') }}
            defaultValue={people?.cidade_de_naturalidade}
          />
        </DoubleElementsInRow>
      </O.CenterSide>
      <O.RightSide>
        <Input
          title="Telefone"
          reg={{ ...register('contato') }}
          defaultValue={people.contato}
        />
        <TextArea
          title="Observação"
          reg={{ ...register('observacao') }}
          defaultValue={people.observacao}
        />
        <Input
          title="Usuario"
          reg={{ ...register('usuarioId') }}
          defaultValue={`${user?.id}`}
          style={{ display: 'none' }}
        />
        <Button title="Enviar" height="40px" width="100%" icon={<BiSend />} />
      </O.RightSide>
    </O.Container>
  )
}

export default FormSolicitarCertidao
