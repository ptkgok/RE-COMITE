import theme from 'assets/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5px;
`;

export const Label = styled.label`
  text-overflow: ellipsis;
  overflow: hidden;
`
export const Field = styled.input`
  width: 100%;
  height: 50px;
  border: solid 1px;
  border-radius: 4px;
  padding: 10px;
  font-size: medium;
  transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s;
  :focus {
    border: solid 1px ${theme.colors.primary};
  }
`
