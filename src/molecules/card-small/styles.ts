import theme from 'assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 33.33%;
  height: 70px;
  text-decoration: none;
  padding: 20px;
  margin: 0px 20px 20px 0px;
  overflow: hidden;
  display: flex;
  background: ${theme.colors.primary};
  border-radius: ${theme.border.radius};
  color: rgb(220, 220, 220);
  font-size: 13px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  gap: 20px;
  cursor: pointer;
  backface-visibility: hidden;
  transform: translateZ(0);
  :hover {
    -webkit-font-smoothing: subpixel-antialiased;
    transform: scale(1.005);
  }
`
export const IconCard = styled.div`
  border-radius: ${theme.border.radius};
  color: ${theme.colors.primary};
  background: ${theme.colors.backgroundLight};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  margin-right: 15px;
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
    font-weight: 800;
  }
`
