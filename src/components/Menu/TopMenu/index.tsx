import React, { useContext } from 'react'
import {
  ProfilePart,
  TopMenuContainer,
  Notification,
  ProfileImage,
  BalloonContainer,
  ItensBalloon,
  LogoPart,
  SquareBallon,
} from './styles'
import { useRouter } from 'next/dist/client/router'
import { MdNotifications, MdPeople } from 'react-icons/md'
import ProfileBalloon from './ProfileBalloon'
import { BiLogOut, BiShapePolygon } from 'react-icons/bi'
import Logo from '../../../assets/logomeegu.png'

interface Menu {
  active?: string
}

const TopMenu: React.FC<Menu> = ({ active }) => {
  const Navigate = useRouter()

  return (
    <>
      <TopMenuContainer>
        <LogoPart>
          <img src={Logo} width="90px" />
        </LogoPart>
        <ProfilePart>

          <Notification>
            <MdNotifications color="#EB4795" size="18px" />
          </Notification>

          <ProfileImage
            id="profileimg"
            src="https://media.istockphoto.com/vectors/user-icon-human-person-sign-vector-id587957104?k=6&m=587957104&s=170667a&w=0&h=umaeFHgEnWFB-A45hQYZXvrcqKh-2fnsx68pwcWCR1c="
          />

          <BalloonContainer id="balloon">
            <SquareBallon id="square"/>
            <div style={{ width: 100, height: 40, position: 'absolute', top: -30, right: 20 }}></div>
            <ItensBalloon onClick={()=>{}}>
            <span>Deslogar</span> <BiLogOut />
            </ItensBalloon>
            <ItensBalloon>
              <span>Perfil</span> <MdPeople />
            </ItensBalloon>
          </BalloonContainer>

        </ProfilePart>
      </TopMenuContainer>
    </>
  )
}

export default TopMenu
