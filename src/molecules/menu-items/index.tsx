import { MenuButton } from 'atoms/menu-buttons'
import React from 'react'
import { MenuOptions } from './menu-object'
import * as S from './styles'

const MenuItems: React.FC = () => {
  return (
    <S.Container>
      {MenuOptions.map(data => (
        <MenuButton key={data.id}>{data.icon}</MenuButton>
      ))}
    </S.Container>
  )
}

export default MenuItems
