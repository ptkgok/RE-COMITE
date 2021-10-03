import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  defaultValue?: string
  reg: any
  required?: boolean
  disabled?: boolean
  height?: string
}

const TextArea: React.FC<Props> = ({
  title,
  defaultValue,
  reg,
  required,
  disabled,
  height
}) => {
  return (
    <S.Container>
      <S.Label htmlFor="title">{title}</S.Label>
      <S.Field
        id="title"
        defaultValue={defaultValue}
        {...reg}
        required={required}
        disabled={disabled}
        height={height}
      />
    </S.Container>
  )
}

export default TextArea
