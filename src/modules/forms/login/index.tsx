import React, { useContext } from 'react'
import Button from 'atomic/atoms/button'
import Input from 'atomic/atoms/input'
import { AuthContext } from 'contexts/Authentication/AuthContext'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { BiAbacus } from 'react-icons/bi'
import * as S from './styles'

const FormLogin: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const route = useRouter()
  const { signIn, signInAdm } = useContext(AuthContext)
  const onSubmit = async (payload) => route.pathname.includes('adm') ? await signInAdm(payload) : await signIn(payload)

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
        <Input title="Senha" type="password" reg={{ ...register('senha') }} />
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
