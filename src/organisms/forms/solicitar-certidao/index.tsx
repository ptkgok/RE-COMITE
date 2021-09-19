import Button from 'atoms/button'
import Input from 'atoms/input'
import TextArea from 'atoms/text-area'
import { DoubleElementsInRow } from 'layouts/common'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiSend } from 'react-icons/bi'
import * as O from '../left-center-right'

const FormSolicitarCertidao: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  console.log(result)
  const onSubmit = data => setResult(data)

  return (
    <O.Container onSubmit={handleSubmit(onSubmit)}>
      <O.LeftSide>
        <Input title="Nome Completo" reg={{ ...register('nome_completo') }} />
        <Input title="Nome da Mãe" reg={{ ...register('nome_da_mae') }} />
        <Input title="Nome do Pai" reg={{ ...register('nome_do_pai') }} />
        <DoubleElementsInRow>
          <Input title="CPF" reg={{ ...register('cpf') }} />
          <Input title="RG" reg={{ ...register('rg') }} />
        </DoubleElementsInRow>
      </O.LeftSide>
      <O.CenterSide>
        <DoubleElementsInRow>
          <Input
            title="Orgão Solicitante"
            reg={{ ...register('orgao_solicitante') }}
            disabled
          />
          <Input
            title="Data de Solicitação"
            reg={{ ...register('data_de_solicitaçao') }}
            type="date"
          />
        </DoubleElementsInRow>
        <Input
          title="Email do Solicitante"
          reg={{ ...register('email_do_solicitante') }}
        />
        <Input
          title="Data de Nascimento"
          reg={{ ...register('data_de_nascimento') }}
        />
        <DoubleElementsInRow>
          <Input
            title="Estado de Naturalidade"
            reg={{ ...register('estado_de_naturalidade') }}
          />

          <Input
            title="Cidade de Naturalidade"
            reg={{ ...register('cidade_de_naturalidade') }}
          />
        </DoubleElementsInRow>
      </O.CenterSide>
      <O.RightSide>
        <Input title="Telefone" reg={{ ...register('telefone') }} />
        <TextArea title="Observação" reg={{ ...register('observaçao') }} />
        <Input
          title="Coordenador"
          style={{ display: 'none' }}
          reg={{ ...register('observaçao') }}
          type="text"
        />
        <Button title="Enviar" height="40px" width="100%" icon={<BiSend />} />
      </O.RightSide>
    </O.Container>
  )
}

export default FormSolicitarCertidao
