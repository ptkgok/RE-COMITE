import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.lessThan('medium')`
    width: 100%;
    margin-left: 10px;
  `}
`;
