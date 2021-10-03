import CardItems from 'molecules/card'
import CardSmall from 'molecules/card-small'
import React from 'react'
import * as S from './styles'

interface Props {
  list: any
}

const ListOfOptionsFeaturesSmallCard: React.FC<Props> = ({ list }) => {
  return (
    <S.Container>
      {list.map((item, index) => (
        <CardSmall key={index} {...item} />
      ))}
    </S.Container>
  )
}

export default ListOfOptionsFeaturesSmallCard
