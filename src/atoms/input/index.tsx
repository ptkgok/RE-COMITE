import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  defaultValue?: string
  reg: any
  required?: boolean
  disabled?: boolean
  type?: string
  style?: any
}

const Input: React.FC<Props> = ({
  title,
  defaultValue,
  reg,
  required,
  disabled,
  type,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.Label htmlFor={title}>{title}</S.Label>
      <S.Field
        id={title}
        defaultValue={defaultValue}
        {...reg}
        required={required}
        disabled={disabled}
        type={type}
      />
    </S.Container>
  )
}

export default Input
