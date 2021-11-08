import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  button {
    margin-top: 30px;
  }
`
export const CenterSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  button {
    margin-top: 30px;
  }
`

export const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  button {
    margin-top: 30px;
  }
`
