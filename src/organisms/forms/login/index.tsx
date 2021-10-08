import Button from 'atoms/button'
import Input from 'atoms/input'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiAbacus } from 'react-icons/bi'
import AuthFn from '../../../pages/api/authentication'

import * as S from './styles'

const FormLogin: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  const route = useRouter()

  console.log(result)
  const onSubmit = async (payload) => {
    const {data} = await axios.post('api/authentication', payload)
    console.log(data)
  }


  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <h1 className="logo">
        <img
          width="60px"
          src="https://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png"
          alt="Logo"
        />
      </h1>
      <S.LeftSide>
        { route.pathname.includes('adm') && "Seção de Administrador" }
        <Input title="Email" reg={{ ...register('email') }} />
        <Input title="Senha" reg={{ ...register('senha') }} />
        <Button title="Logar" width="50%" icon={<BiAbacus />} />
      </S.LeftSide>
      <S.RightSide>
        <img
          width="60%"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_information_re_vw8a.svg"
          alt="Identificação"
        />
      </S.RightSide>
    </S.Container>
  )
}

export default FormLogin
