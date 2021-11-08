import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 50vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px #bdc3c7;
  overflow: scroll;
  border-radius: ${theme.border.radius};
  text-indent: initial;

  ::-webkit-scrollbar {
    width: 4px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #666666;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
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
  justify-content: left;
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
  text-align: left;
`
