import CardItems from 'molecules/card'
import React from 'react'
import * as S from './styles'

interface Props {
  list: any
}

const ListOfOptionsFeatures: React.FC<Props> = ({ list }) => {
  return (
    <S.Container>
      {list.map((item, index) => (
        <CardItems key={index} {...item} />
      ))}
    </S.Container>
  )
}

export default ListOfOptionsFeatures
