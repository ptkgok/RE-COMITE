import React from 'react'

import * as M from './styles'

interface Props {
  title: string
}

const RadioButtonsGroup: React.FC<Props> = ({ title, children }) => {
  return (
    <M.Container>
      <M.Label>{title}</M.Label>
      <M.Content>{children}</M.Content>
    </M.Container>
  )
}

export default RadioButtonsGroup
