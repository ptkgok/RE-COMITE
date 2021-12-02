import { rolesOfUsers } from '@services/utils/static/roles-users'
import Button from 'atoms/button'
import Input from 'atoms/input'
import Select from 'atoms/select'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BiAddToQueue } from 'react-icons/bi'
import * as O from './styles'

const CreateUsersForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  const [orgaos, setOrgaos] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/orgs/list-all')
      let orgaos = await data.orgaos.map((orgao, key) => {
        return {
          id: key,
          label: orgao.nome,
          value: orgao.id
        }
      })
      setOrgaos(orgaos)
    })()
  }, [])

  const onSubmit = async payload => {
    const { data } = await axios.post('/api/users/create-user', payload)
    setResult(data.message)
    setTimeout(() => window.location.reload(), 5000)
  }

  return (
    <O.Container onSubmit={handleSubmit(onSubmit)}>
      {result}
      <Input title="Nome do Usuario" reg={{ ...register('nome') }} />
      <Input title="Email" reg={{ ...register('email') }} />
      <Input title="Senha" reg={{ ...register('senha') }} />
      <Select
        title="Tipo do Usuario"
        reg={{ ...register('tipo_do_usuario') }}
        options={rolesOfUsers}
      />
      <Select title="Orgão" reg={{ ...register('orgaoId') }} options={orgaos} />
      <Button title="Criar" width="100%" icon={<BiAddToQueue />} />
    </O.Container>
  )
}

export default CreateUsersForm
