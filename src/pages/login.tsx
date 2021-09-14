import React from 'react'
import Head from 'next/head'

import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Authentication/AuthContext'

import Logo from '../assets/logomeegu.png'
import { parseCookies } from 'nookies'

import { Container } from '../styles/pages/Home'
import { ContainerLogin } from '../components/Form/Login/styles'
import InputComponent from '../components/UIKits/Inputs'
import { BiLogIn } from 'react-icons/bi'
import ButtonComponent from '../components/UIKits/Button'
import { GetServerSideProps } from 'next'
import { redirect } from 'next/dist/next-server/server/api-utils'
import router from 'next/router'
import { getAPIClient } from '../services/axios'

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <img src={Logo} alt="" />
      <ContainerLogin onSubmit={handleSubmit(handleSignIn)}>
        <InputComponent
          {...register('email')}
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
        />

        <InputComponent
          {...register('senha')}
          id="password"
          name="senha"
          type="password"
          required
          placeholder="Password"
        />

        <ButtonComponent text="Avançar">
          <BiLogIn />
        </ButtonComponent>
      </ContainerLogin>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['@gok/token']: token } = parseCookies(ctx)

  if (token) ctx.res.writeHead(302, { Location: '/dashboard' }).end()

  return {
    props: {}
  }
}

export default Login
