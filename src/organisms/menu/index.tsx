import MenuItems from 'molecules/menu-items'
import React from 'react'

import * as O from './styles'

const Menu: React.FC = () => {
  return (
    <O.Container>
      <img
        width="50px"
        loading="lazy"
        src="https://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png"
      />
      <MenuItems />
    </O.Container>
  )
}

export default Menu
