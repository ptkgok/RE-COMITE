import axios from 'axios'
import AppLayout from 'layouts/app'
import { DoubleElementsInRow, Column } from 'layouts/common'
import CriarOrgaosForm from 'modules/forms/criar-orgaos'
import Table from 'atomic/organisms/table'
import React, { useEffect, useState } from 'react'

const ManageOrgansScreen: React.FC = () => {
  const [orgaos, setOrgaos] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/orgaos/listagem')
      setOrgaos(data.orgaos)
    })()
  }, [])

  return (
    <AppLayout>
      <DoubleElementsInRow style={{ alignItems: 'flex-start' }}>
        <Column>
          <span>Criar Posto</span>
          <CriarOrgaosForm />
        </Column>
        <Column>
          <span>Postos cadastrados</span>
          <Table data={orgaos} contents={['nome', 'email', 'telefone']} />
        </Column>
      </DoubleElementsInRow>
    </AppLayout>
  )
}

export default ManageOrgansScreen
