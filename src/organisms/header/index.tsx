import Button from 'atoms/button'
import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'

import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.ProfileImage loading="lazy" src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
        <Button width="70px" height="40px" title="Sair" icon={<BiDoorOpen />} />
      </S.Profile>
    </S.Container>
  )
}

export default Header
