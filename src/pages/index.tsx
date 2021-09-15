import LoginLayout from 'layouts/login'
import FormLogin from 'organisms/forms/login'
import React from 'react'

const IndexPage: React.FC = () => {
  return (
    <LoginLayout>
      <FormLogin />
    </LoginLayout>
  )
}

export default IndexPage
