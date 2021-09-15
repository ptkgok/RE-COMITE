import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  defaultValue?: string
  reg: any
  options: any
}

const Select: React.FC<Props> = ({ title, defaultValue, reg, options }) => {
  return (
    <S.Container>
      <S.Label htmlFor="title">{title}</S.Label>
      <S.Field id="title" defaultValue={defaultValue} {...reg}>
        {options &&
          options.map(({ value }, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
      </S.Field>
    </S.Container>
  )
}

export default Select
