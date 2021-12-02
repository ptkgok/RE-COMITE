import Button from 'atoms/button'
import Input from 'atoms/input'
import Select from 'atoms/select'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BiAddToQueue } from 'react-icons/bi'
import * as O from './styles'

const CriarOrgaosForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')

  const onSubmit = async payload => {
    const { data } = await axios.post('/api/orgs/create-org', payload)
    setResult(data.message)
    setTimeout(() => window.location.reload(), 5000)
  }

  return (
    <O.Container onSubmit={handleSubmit(onSubmit)}>
      {result}
      <Input title="Nome do Posto" reg={{ ...register('nome') }} />
      <Input title="Email do Posto" reg={{ ...register('email') }} />
      <Input title="Telefone do Posto" reg={{ ...register('telefone') }} />
      <Button title="Criar" width="100%" icon={<BiAddToQueue />} />
    </O.Container>
  )
}

export default CriarOrgaosForm
