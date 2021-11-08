import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.form`
  width: 60%;
  height: 55vh;
  border-radius: ${theme.border.radius};
  background: ${theme.colors.foreground};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 4px #bdc3c7;

  overflow: hidden;

  .logo {
    position: absolute;
    top: 50px;
  }
`

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
`

export const RightSide = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
