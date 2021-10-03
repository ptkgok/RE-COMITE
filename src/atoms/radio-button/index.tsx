import React from 'react'

import * as A from './styles'

interface Props {
  value: string | number
  reg: any
  name: string
}

const RadioButton: React.FC<Props> = ({ value, name, reg }) => {
  return (
    <A.Container htmlFor={name}>
      <A.Label>{value}</A.Label>
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
