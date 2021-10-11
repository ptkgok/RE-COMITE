import React, { useContext } from 'react'
import Button from 'atoms/button'
import Input from 'atoms/input'
import RadioButton from 'atoms/radio-button'
import Select from 'atoms/select'
import { SelectData, SelectDataBool } from 'atoms/select/test-data'
import TextArea from 'atoms/text-area'
import axios from 'axios'
import { AuthContext } from 'contexts/Authentication/AuthContext'
import { DoubleElementsInRow } from 'layouts/common'
import RadioButtonsGroup from 'molecules/radio-buttons-group'
import { useForm } from 'react-hook-form'
import { BiAbacus } from 'react-icons/bi'
import { ScheduleRG } from 'services/utils/scheduleRG'


import * as O from './styles'

const ToScheduleRg: React.FC = ({ userId }: any) => {
  const { register, handleSubmit } = useForm()
  const { user } = useContext(AuthContext)

  const onSubmit = async (payload: ScheduleRG) => {
    console.log(payload)
    const {data} = await axios.post('/api/to-schedule-rg', payload)
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
        <Input
          title="Data de Nascimento"
          reg={{ ...register('data_de_nascimento') }}
          type="date"
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
      </O.LeftSide>
      <O.CenterSide>
        <RadioButtonsGroup title="Cidadão sabe CPF?">
          <RadioButton
            value={true}
            label="Sim"
            name="cidadao_sabe_cpf-sim"
            reg={{ ...register('cidadao_sabe_cpf') }}
          />
          <RadioButton
            value={false}
            label="Não"
            name="cidadao_sabe_cpf-nao"
            reg={{ ...register('cidadao_sabe_cpf') }}
          />
        </RadioButtonsGroup>
        <RadioButtonsGroup title="Cidadão em posse da Certidão?">
          <RadioButton
            value={true}
            label="Sim"
            name="cidadao_em_posse_da_certidao-sim"
            reg={{ ...register('cidadao_em_posse_da_certidao') }}
          />
          <RadioButton
            value={false}
            label="Não"
            name="cidadao_em_posse_da_certidao-nao"
            reg={{ ...register('cidadao_em_posse_da_certidao') }}
          />
        </RadioButtonsGroup>
        <DoubleElementsInRow>
          <Input title="Telefone" reg={{ ...register('contato') }} />
          <Input title="Telefone 2" reg={{ ...register('contato2') }} />
        </DoubleElementsInRow>
        <Select
          title="Motivo"
          reg={{ ...register('motivo') }}
          options={SelectData}
        />
        <DoubleElementsInRow>
          <Select
            title="Status"
            reg={{ ...register('status') }}
            options={SelectData}
          />
          <Select
            title="Resolvido?"
            reg={{ ...register('resolvido') }}
            options={SelectDataBool}
          />
        </DoubleElementsInRow>
        <DoubleElementsInRow>
          <Input
            title="Orgão Solicitante"
            type="text"
            reg={{ ...register('orgao') }}
            defaultValue="IIPM"
            disabled
          />
          <Input
            title="Data de Solicitação"
            reg={{ ...register('data_de_solicitacao') }}
            defaultValue={new Date().toLocaleString('pt-BR').split(' ')[0].toString()}
            disabled
            type="text"
          />
        </DoubleElementsInRow>
      </O.CenterSide>

      <O.RightSide>
        <DoubleElementsInRow>
          <Input
            title="Endereço Residencial"
            reg={{ ...register('endereco_residencial') }}
          />
          <Input
            title="Cidade Residencial"
            reg={{ ...register('cidade_residencial') }}
          />
        </DoubleElementsInRow>
        <Input title="CEP" reg={{ ...register('cep') }} />

        <Select
          title="Local de Agendamento"
          options={SelectData}
          reg={{ ...register('local_de_agendamento') }}
        />
        <DoubleElementsInRow>
          <Input
            title="Data de Agendamento"
            reg={{ ...register('data_de_agendamento') }}
          />

          <Input
            title="Hora de Agendamento"
            reg={{ ...register('hora_do_agendamento') }}
          />
        </DoubleElementsInRow>
        <TextArea title="Observação" reg={{ ...register('observacao') }} />
        <Input
            title="Usuario"
            reg={{ ...register('usuario') }}
            defaultValue={`${user}`}
            style={{ display: 'none' }}
          />
        <Button title="Enviar" height="40px" width="100%" icon={<BiAbacus />} />
      </O.RightSide>
    </O.Container>
  )
}

export default ToScheduleRg