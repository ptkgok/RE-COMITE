import React from 'react'
import { Props } from './props'

import * as S from './styles'

const Button: React.FC<Props> = ({ title, icon, ...rest }) => {
  return (
    <S.Container {...rest}>
      {title && <span>{title}</span>}
      {icon && <span>{icon}</span>}
    </S.Container>
  )
}

export default Button
