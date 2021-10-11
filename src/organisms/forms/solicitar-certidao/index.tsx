import Button from 'atoms/button'
import Input from 'atoms/input'
import TextArea from 'atoms/text-area'
import axios from 'axios'
import { DoubleElementsInRow } from 'layouts/common'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiSend } from 'react-icons/bi'
import * as O from '../left-center-right'

const FormSolicitarCertidao: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (payload) => {
    console.log(payload)
    const {data} = await axios.post('/api/require-certificate', payload)
  }

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
            reg={{ ...register('orgao') }}
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
        <Input title="Telefone" reg={{ ...register('contato') }} />
        <TextArea title="Observação" reg={{ ...register('observacao') }} />
        <Input
          title="Coordenador"
          style={{ display: 'none' }}
          reg={{ ...register('usuario') }}
          type="text"
        />
        <Button title="Enviar" height="40px" width="100%" icon={<BiSend />} />
      </O.RightSide>
    </O.Container>
  )
}

export default FormSolicitarCertidao
