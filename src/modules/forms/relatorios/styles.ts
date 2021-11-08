import styled from 'styled-components'

export const Container_Centralize = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Container_Form = styled.form`
  width: 50vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
