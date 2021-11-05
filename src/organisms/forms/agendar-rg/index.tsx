import React, { useState, useEffect } from 'react'
import Button from 'atoms/button'
import Input from 'atoms/input'
import RadioButton from 'atoms/radio-button'
import Select from 'atoms/select'
import { SelectDataBool } from 'atoms/select/test-data'
import TextArea from 'atoms/text-area'
import axios from 'axios'
import { DoubleElementsInRow } from 'layouts/common'
import RadioButtonsGroup from 'molecules/radio-buttons-group'
import { useForm } from 'react-hook-form'
import { BiAbacus, BiHourglass } from 'react-icons/bi'
import * as O from './styles'
import { parseCookies } from 'nookies'
import Modal from 'organisms/modal'
import {
  PostosData,
  MotivosData,
  StatusData
} from 'services/data/static-selects'

const ToScheduleRg: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { ['@IIPM/user']: userString }: any = parseCookies()

  // States
  const [modalOpen, setModalOpen] = useState(false)
  const [result, setResult] = useState('')
  const [datas, setDatas] = useState([])
  const [dataEscolhida, setDataEscolhida] = useState()
  const [postoEscolhido, setPostoEscolhido] = useState()
  const [horas, setHoras] = useState()

  const user = JSON.parse(userString)

  const onSubmit = async (payload) => {
    const { data } = await axios.post('/api/registro-geral/agendar', payload)
    setResult(data.message)
    setTimeout(() => window.location.reload(), 5000)
  }

  const pegarData = async e => {
    const { data } = await axios.get(
      `/api/horarios/listar-todos-horarios?=${e.target.value}`
    )
    setDatas(data)
    setPostoEscolhido(e.target.value)
  }

  const pegarHorarios = async () => {
    
    const { data } = await axios.post('/api/horarios/listar-horarios-posto', { data: dataEscolhida, posto: postoEscolhido })

    setHoras(data)

  }

  return (
    <O.Container onSubmit={handleSubmit(onSubmit)}>
      <Modal isOpen={modalOpen} closeModal={setModalOpen}>
        {datas ? (
          datas.map((data,key) => (
            <div key={key} onClick={() => {
              setDataEscolhida(data.data)
              setModalOpen(!modalOpen)
              }}>
              <h1><BiHourglass /> {data.data}</h1>
            </div>
          ))
        ) : (
          <div>
            <h1>Não tem nenhuma data disponível.</h1>
          </div>
        )}
        {
          horas ? <div>Tem horas </div> : <div>sem horas</div>
        }
      </Modal>
      {result}
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
            value="Sim"
            label="Sim"
            name="cidadao_sabe_cpf-sim"
            reg={{ ...register('cidadao_sabe_cpf') }}
          />
          <RadioButton
            value="Não"
            label="Não"
            name="cidadao_sabe_cpf-nao"
            reg={{ ...register('cidadao_sabe_cpf') }}
          />
        </RadioButtonsGroup>
        <RadioButtonsGroup title="Cidadão em posse da Certidão?">
          <RadioButton
            value="Sim"
            label="Sim"
            name="cidadao_em_posse_da_certidao-sim"
            reg={{ ...register('cidadao_em_posse_da_certidao') }}
          />
          <RadioButton
            value="Não"
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
          options={MotivosData}
        />
        <DoubleElementsInRow>
          <Select
            title="Status"
            reg={{ ...register('status') }}
            options={StatusData}
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
            defaultValue={
              user?.orgao?.length > 0 ? `${user.orgao[0].nome}` : 'Nenhum'
            }
            // disabled
          />
          <Input
            title="Data de Solicitação"
            reg={{ ...register('data_de_solicitacao') }}
            defaultValue={new Date().toLocaleString('pt-BR').split(' ')[0]}
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
          options={PostosData}
          reg={{ ...register('local_de_agendamento'), onChange: pegarData }}
        />
        <DoubleElementsInRow>
          <Input
            title="Data de Agendamento"
            reg={{ ...register('data_de_agendamento') }}
            onFocus={e => setModalOpen(!modalOpen)}
            type="date"
            defaultValue={dataEscolhida}
          />

          <Input
            title="Hora de Agendamento"
            type="time"
            reg={{ ...register('hora_do_agendamento'), onClick: () => dataEscolhida ? pegarHorarios() : alert("Selecione uma data primeiro!") }}
          />
        </DoubleElementsInRow>
        <TextArea title="Observação" reg={{ ...register('observacao') }} />
        <Input
          title="Usuario"
          reg={{ ...register('usuarioId') }}
          defaultValue={`${user.id}`}
          style={{ display: 'none' }}
        />
        <Button title="Enviar" height="40px" width="100%" icon={<BiAbacus />} />
      </O.RightSide>
    </O.Container>
  )
}

export default ToScheduleRg
