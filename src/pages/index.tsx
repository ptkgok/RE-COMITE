import LoginLayout from 'layouts/login'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import FormLogin from 'modules/forms/login'
import React from 'react'

const IndexScreen: React.FC = () => {
  return (
    <LoginLayout>
      <FormLogin />
    </LoginLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@IIPM/token']: token } = parseCookies(ctx)
  
  if (token) {
    ctx.res.setHeader("location", "/home");
    ctx.res.statusCode = 302;
    ctx.res.end();
    return {
      props: {}
    }
  }

  return {
    props: {}
  }
}

export default IndexScreen
