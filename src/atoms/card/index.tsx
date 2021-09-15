import React from 'react'

import * as S from './styles'

interface Props {
  title?: string
  description?: string
  icon?: any
}

const CardItems: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <S.Container>
      <S.IconCard>{icon}</S.IconCard>
      <S.TitleAndDescriptionCard>
        <h3>{title ? title : 'Sem conteudo'}</h3>
        <p>{description ? description : 'Sem conteudo'}</p>
      </S.TitleAndDescriptionCard>
    </S.Container>
  )
}

export default CardItems
