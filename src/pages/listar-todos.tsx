import React from 'react'
import AppLayout from 'layouts/app'
import { GetStaticProps } from 'next'
import Table from 'organisms/table'
import theme from 'assets/styles/theme'
import { GetAllUsers } from 'services/data/get-all-users'

const ListarTodosScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <h3 style={{ marginBottom: 15, color: theme.colors.primary }}>
        Listagem de Solicitações registradas
      </h3>
      <Table data={data} contents={['name', 'email', 'id']} />
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await GetAllUsers()
  return { props: { data } }
}

export default ListarTodosScreen
