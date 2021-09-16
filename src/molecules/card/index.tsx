import { useRouter } from 'next/router'
import React from 'react'

import * as S from './styles'

interface Props {
  title?: string
  description?: string
  icon?: any
  url: string
}

const CardItems: React.FC<Props> = ({ title, description, icon, url }) => {
  const Router = useRouter()

  return (
    <S.Container onClick={() => Router.push(url)}>
      <S.IconCard>{icon}</S.IconCard>
      <S.TitleAndDescriptionCard>
        <h3>{title ? title : 'Sem conteudo'}</h3>
        <p>{description ? description : 'Sem conteudo'}</p>
      </S.TitleAndDescriptionCard>
    </S.Container>
  )
}

export default CardItems
