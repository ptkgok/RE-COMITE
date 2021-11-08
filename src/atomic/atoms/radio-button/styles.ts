import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background: ${theme.colors.primary};
  height: 40px;
  border-radius: ${theme.border.radius};
  cursor: pointer;
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 0px 10px;
  border-radius: ${theme.border.radius};
`

export const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
