import Button from 'atoms/button';
import Input from 'atoms/input';
import Select from 'atoms/select';
import { SelectData } from 'atoms/select/test-data';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiAddToQueue } from 'react-icons/bi';
import * as O from './styles'


const CreateUsersForm: React.FC = () => {
    const { register, handleSubmit } = useForm()
    const [result, setResult] = useState('')
    const route = useRouter()
  
    console.log(result)
    const onSubmit = data => setResult(data)

  return (
      <O.Container onSubmit={handleSubmit(onSubmit)}>
          <Input title="Nome do Usuario" reg={{ ...register('nome') }} />
          <Input title="Email" reg={{ ...register('email') }} />
          <Input title="Senha" reg={{ ...register('senha') }} />
          <Select title="Tipo do Usuario" reg={{ ...register('tipo_do_usuario') }} options={SelectData} />
          <Button title="Criar" width="100%" icon={<BiAddToQueue />} />
      </O.Container>
  )
}

export default CreateUsersForm;