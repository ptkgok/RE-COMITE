import React from 'react'

import * as A from './styles'

interface Props {
  value: any
  reg: any
  label?: string
  name: string
}

const RadioButton: React.FC<Props> = ({ value, name, reg, label }) => {
  return (
    <A.Container htmlFor={name}>
      <A.Label>{label}</A.Label>
      <A.RadioButton
        id={name}
        name={name}
        type="radio"
        value={value}
        {...reg}
      />
    </A.Container>
  )
}

export default RadioButton
