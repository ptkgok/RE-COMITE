import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const MenuButton = styled.div`
  width: 50px;
  height: 50px;

  border-radius: ${theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  color: ${theme.colors.primary};
  :hover {
    filter: brightness(1.2);
    background: ${theme.colors.primary};
    color: white;
  }
`
