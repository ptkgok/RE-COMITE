import { MenuButton } from 'atoms/menu-buttons'
import { useRouter } from 'next/router'
import React from 'react'
import { MenuOptions } from 'services/utils/menu-object'
import * as S from './styles'

const MenuItems: React.FC = () => {
  const Router = useRouter()

  return (
    <S.Container>
      {MenuOptions.map(data => (
        <MenuButton key={data.id} onClick={() => Router.push(data.url)}>
          {data.icon}
        </MenuButton>
      ))}
    </S.Container>
  )
}

export default MenuItems
