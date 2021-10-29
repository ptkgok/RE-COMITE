import styled from 'styled-components'

interface Props {
  width?: number | string
  height?: number | string
  wrap?: string
  padding?: number | string
  justify?: string
  align?: string
}


export const DoubleElementsInRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const Row = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: ${ prop => prop.wrap || 'wrap' };
  justify-content: ${ prop => prop.justify || 'center' };
  align-items: ${ prop => prop.align || 'center' };
`

export const Column = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${ prop => prop.justify || 'center' };
  align-items: ${ prop => prop.align || 'center' };
`