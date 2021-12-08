import React from 'react'
import { ChooseColumns } from 'services/utils/tables-methods/choose-columns'

import * as S from './styles'

interface Props {
  data: string[]
  contents: string[]
  url?: string
  byId?: boolean
}

const Table: React.FC<Props> = ({ data, contents, url, byId }) => {
  const GettingColumns: string[] = data && data[0] && Object.keys(data[0])
  const Columns: string[] =
    data && data[0] && ChooseColumns(GettingColumns, contents)
  return (
    <S.Container>
      <S.RowHead>
        {Columns?.map((data: string, key: number) => (
          <S.Column key={key}>
            {data.replaceAll('_', ' ').toUpperCase()}
          </S.Column>
        ))}
        {data && url && <S.Column>Editar</S.Column>}
      </S.RowHead>
      {data?.map((row, key) => (
        <S.Row key={key}>
          {Columns.map((column: string, key: number) => (
            <S.Column key={key}>
              {row[column] || new Date(row[column])}
            </S.Column>
          ))}
          {data && url && (
            <S.Column>
              <a href={byId ? url + data[key].id : url}>Editar</a>
            </S.Column>
          )}
        </S.Row>
      ))}
    </S.Container>
  )
}

export default Table
