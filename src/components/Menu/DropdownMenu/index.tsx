import React, { useContext } from 'react'
import { ItemMenu, DropdownMenuContainer } from './styles'
import { useRouter } from 'next/dist/client/router'
import TopMenu from '../TopMenu'
import { BiMessageAltDetail, BiGridAlt, BiPackage, BiRocket, BiXCircle } from 'react-icons/bi'
import { useState } from 'react'


interface Menu {
  active?: string
}

const DropdownMenu: React.FC<Menu> = ({ active }) => {
  
  const Navigate = useRouter()


  return (
      <DropdownMenuContainer id="dropdown-menu">
        <ItemMenu>
            <BiXCircle />
        </ItemMenu>

        <ItemMenu 
        style={{ background: `${active === 'home' && '#363638'}` }}
        onClick={()=> Navigate.push('/dashboard')}
        >
          <BiGridAlt fontSize="19px" />

        </ItemMenu>

        <ItemMenu
        onClick={()=> Navigate.push('/vacations')}
        >
          <BiMessageAltDetail fontSize="19px" />

        </ItemMenu>

      </DropdownMenuContainer>
  )
}

export default DropdownMenu
