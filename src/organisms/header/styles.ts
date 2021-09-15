import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background: ${theme.colors.primary};
`
export const Profile = styled.div`
  max-width: 200px;
  height: 70px;
  position: absolute;
  right: 50px;
  top: 215px;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  overflow: hidden;
  padding: 0px 20px;
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  background: gray;
  border-radius: 12px;
`
