import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 60vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px #bdc3c7;
  overflow: hidden;
  border-radius: ${theme.border.radius};

  text-indent: initial;
`

export const Row = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 0px #bdc3c7;
  display: flex;
  margin-bottom: 2px;
`

export const RowHead = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 0px #bdc3c7;
  background: #eaeaea;
  display: flex;
  margin-bottom: 2px;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`

export const Column = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  top: 0;
  left: 0;
  z-index: 2;
  position: sticky;
  background-color: #fff;

  color: ${theme.colors.primary};
  font-weight: 500;
  line-height: 1.5rem;
`
