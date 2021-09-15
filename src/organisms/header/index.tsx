import Button from 'atoms/button'
import React from 'react'

import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.ProfileImage src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
        <Button bgcolor="white" width="70px" title="Sair" />
      </S.Profile>
    </S.Container>
  )
}

export default Header
