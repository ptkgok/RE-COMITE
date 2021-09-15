import theme from 'assets/styles/theme';
import styled from 'styled-components';

export const MenuButton = styled.div`
  width: 50px;
  height: 50px;
  background: ${theme.colors.primary};
  border-radius: ${theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  color: ${theme.colors.text};
  :hover {
    filter: brightness(1.2);
  }
`;
