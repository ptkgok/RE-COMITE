import React, { ReactNode } from 'react'
import * as S from './styles'

const LoginLayout: React.FC<ReactNode> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export default LoginLayout
