import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`

export const Label = styled.label`
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${theme.colors.primary};
  font-weight: bold;
  white-space: nowrap;
`
