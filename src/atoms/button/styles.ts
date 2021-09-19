import theme from 'assets/styles/theme'
import styled from 'styled-components'
import { Props } from './props'

export const Container = styled.button<Props>`
  border: none;
  width: ${prop => prop.width || 'max-content'};
  height: ${prop => prop.height || '40px'};
  display: flex;
  border-radius: ${theme.border.radius};
  justify-content: center;
  padding: 5px 10px;
  gap: 10px;
  align-items: center;
  background: ${prop => prop.bgcolor || theme.colors.primary};
  transition: all 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  cursor: pointer;
  color: white;

  svg {
    margin-bottom: -3px;
  }

  span {
    word-spacing: 2px;
    font-family: 'Poppins';
    font-weight: 800;
  }

  :hover {
    filter: brightness(1.2);
  }
`
