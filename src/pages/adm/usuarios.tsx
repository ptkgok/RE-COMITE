import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AppLayout from 'layouts/app'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import CreateUsers from 'modules/forms/create-users'
import Table from 'atomic/organisms/table'
import { api } from 'services/api'
import { GetAllRgs } from 'services/data/get-all-rgs'
import { DoubleElementsInRow } from 'layouts/common'
import { Column } from 'assets/styles/grids'

const GerenciarUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/usuarios/listar-usuarios')
      setUsuarios(data.usuarios)
    })()
  }, [])

  return (
    <AppLayout>
      <DoubleElementsInRow style={{ alignItems: 'flex-start' }}>
        <Column>
          <span>Gerenciar usuarios</span>
          <CreateUsers />
        </Column>
        <Column>
        <span>Usuarios cadastrados</span>
        <Table
          data={usuarios}
          contents={['nome', 'email', 'tipo_do_usuario']}
        />
        </Column>
      </DoubleElementsInRow>
    </AppLayout>
  )
}

export default GerenciarUsuarios
