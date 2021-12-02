import React, { useState, useEffect } from 'react'
import RadioButtonsGroup from '@molecules/radio-buttons-group'
import { PostosData } from '@services/data/static-selects'
import { RadioButton, Button, Input, Select } from 'atoms'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { BiAddToQueue } from 'react-icons/bi'
import * as O from './styles'

const AddHoursForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')

  const onSubmit = async payload => {
    const { data } = await axios.post('/api/hours/add-hour', payload)
    setResult(data.message)
    setTimeout(() => window.location.reload(), 5000)
  }

  return (
    <O.Container onSubmit={handleSubmit(onSubmit)}>
      {result}
      <Select
        title="Local de Agendamento"
        options={PostosData}
        reg={{ ...register('posto') }}
      />
      <Input title="Dia disponivel" reg={{ ...register('dia') }} />
      <Input title="Nome do dia" reg={{ ...register('dianome') }} />
      <Input title="Data" reg={{ ...register('data') }} type="date" />
      <Input title="Hora" reg={{ ...register('hora') }} type="time" />
      <RadioButtonsGroup title="Marcado">
        <RadioButton
          value="Sim"
          label="Sim"
          name="marcado-sim"
          reg={{ ...register('marcado') }}
        />
        <RadioButton
          value="Não"
          label="Não"
          name="marcado-nao"
          reg={{ ...register('marcado') }}
        />
      </RadioButtonsGroup>
      <Button title="Criar" width="100%" icon={<BiAddToQueue />} />
    </O.Container>
  )
}

export default AddHoursForm
