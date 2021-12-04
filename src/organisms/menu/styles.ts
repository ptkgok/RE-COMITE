import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 70px;
  height: 100vh;
  background: #f5f5f5;
  box-shadow: 1px 1px 1px #bdc3c7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding-top: 50px;
  z-index: 999;
  position: fixed;

  ${media.lessThan('medium')`
    width: 60px;
    height: 100%;
  `}
`
