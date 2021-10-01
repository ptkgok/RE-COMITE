import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ContentAndHeader = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 70px;
`
export const Content = styled.div`
  width: 100%;
  height: fit-content;
  padding: 50px 50px 1% 1%;

  ${media.lessThan('medium')`
    width: 100%;
    margin-left: 10px;
  `}
`
