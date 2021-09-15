import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  height: max-content;
  padding: 30px 10px;
  background: ${theme.colors.primary};
  border-radius: ${theme.border.radius};
  display: grid;
  grid-template-columns: 1fr 5fr;

  cursor: pointer;
  transition: all 0.4s;
  :hover {
    transform: scale(1.02);
  }
`
export const IconCard = styled.div`
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: ${theme.border.radius};
  background: white;
  color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleAndDescriptionCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    color: white;
  }

  p {
    width: 100%;
  }
`
