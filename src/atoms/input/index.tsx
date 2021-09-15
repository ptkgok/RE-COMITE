import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  defaultValue?: string
  reg: any
}

const Input: React.FC<Props> = ({ title, defaultValue, reg }) => {
  return (
    <S.Container>
      <S.Label htmlFor="title">{title}</S.Label>
      <S.Field id="title" defaultValue={defaultValue} {...reg} />
    </S.Container>
  )
}

export default Input
