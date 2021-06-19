import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { destroyCookie } from 'nookies'

import { BalloonContainer, ItensBalloon } from '../styles';

const ProfileBalloon: React.FC = () => {

  const Logout = () => {
    return destroyCookie(null, '@gok/token', { path: '/' })
  }

  return (
    <BalloonContainer id="balloon">
      <ItensBalloon onClick={ Logout }>
        Deslogar <BiLogOut />
      </ItensBalloon>
    </BalloonContainer>
  )
}

export default ProfileBalloon;