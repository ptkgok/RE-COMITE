import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  z-index: 999999;
  backdrop-filter: saturate(120%) blur(3px);
  background-color: rgba(133, 127, 127, 0.15);
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: ${theme.colors.background};
  border-radius: ${theme.border.radius};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  padding: 3% 2%;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    width: 90vw;
    height: 90vh;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10vh;
  right: 10vw;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: ${theme.colors.primary};
  font-size: 27px;
  :hover {
    filter: brightness(1.2);
  }

  @media (max-width: 450px) {
    top: 5vh;
    right: 5vw;
  }
`
