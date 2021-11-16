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
  onFocus?: any
  value?: any
}

const Input: React.FC<Props> = ({
  title,
  defaultValue,
  value,
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
        value={value}
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
