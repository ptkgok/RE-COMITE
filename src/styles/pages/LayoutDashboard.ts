import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;


export const TitlePage = styled.h2`
  color: ${ props => props.theme.colors.primary };

  // Media Queries

  @media (max-width: 320px) {
    font-size: 5vw;
  }

`

export const Content = styled.div`
  width: 100%;
  margin: 0px 20px;
  padding: 20px;
  padding-top: 50px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ${TitlePage} {
    margin-top: 60px;
  }
  // Media Queries

  @media (max-width: 320px) {
    font-size: 5vw;
  }
`
