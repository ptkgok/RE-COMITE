import { url } from 'inspector';
import { useRouter } from 'next/router';
import { title } from 'process';
import React from 'react';

// import { Container } from './styles';

import * as S from './styles'

interface Props {
  title?: string
  description?: string
  icon?: any
  url: string
}

const CardSmall: React.FC<Props> = ({ title, description, icon, url }) => {
  const Router = useRouter()
  return (
    <S.Container onClick={() => Router.push(url)}>
    <S.IconCard>{icon}</S.IconCard>
    <S.TitleAndDescriptionCard>
      <h3>{title ? title : 'Sem conteudo'}</h3>
    </S.TitleAndDescriptionCard>
  </S.Container>
  )
}

export default CardSmall;