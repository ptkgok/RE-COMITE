import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  defaultValue?: string
  reg: any
  options: any
  required?: boolean
}

const Select: React.FC<Props> = ({
  title,
  defaultValue,
  reg,
  options,
  required
}) => {
  return (
    <S.Container>
      <S.Label htmlFor="title">{title}</S.Label>
      <S.Field
        id="title"
        defaultValue={defaultValue}
        {...reg}
        required={required}
      >
        {options &&
          options.map(({ value, label }, key) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
      </S.Field>
    </S.Container>
  )
}

export default Select
