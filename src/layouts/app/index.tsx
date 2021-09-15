import Menu from 'organisms/menu'
import React, { ReactNode } from 'react'

import * as S from './styles'

const AppLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <S.Container>
      <Menu />
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default AppLayout
