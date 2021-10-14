import React from 'react'
import Button from 'atoms/button'
import Router from 'next/router'
import { destroyCookie } from 'nookies'
import { BiDoorOpen } from 'react-icons/bi'

import * as S from './styles'

const Header: React.FC = () => {

  const LogOut = () => {
    destroyCookie(null, '@IIPM/token')
    destroyCookie(null, '@IIPM/user')
    return Router.push('/');
  }

  return (
    <S.Container>
      <S.Profile>
        <S.ProfileImage loading="lazy" src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
        <Button width="70px" height="40px" title="Sair" icon={<BiDoorOpen />} onClick={LogOut} />
      </S.Profile>
    </S.Container>
  )
}



export default Header
