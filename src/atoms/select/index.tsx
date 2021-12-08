import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  defaultValue?: string
  reg: any
  options: any
  required?: boolean
  onChange?: (props: string) => void
  value?: string
}

const Select: React.FC<Props> = ({
  title,
  defaultValue,
  reg,
  options,
  required,
  onChange
}) => {
  return (
    <S.Container>
      <S.Label htmlFor="title">{title}</S.Label>
      <S.Field
        id="title"
        defaultValue={defaultValue}
        {...reg}
        required={required}
        onChange={onChange}
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
