import Header from 'atomic/organisms/header'
import Menu from 'atomic/organisms/menu'
import React, { ReactNode } from 'react'

import * as S from './styles'

const AppLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <S.Container>
      <Menu />
      <S.ContentAndHeader>
        <Header />
        <S.Content>{children}</S.Content>
      </S.ContentAndHeader>
    </S.Container>
  )
}

export default AppLayout
