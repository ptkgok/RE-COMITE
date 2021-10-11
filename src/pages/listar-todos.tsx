import React from 'react'
import AppLayout from 'layouts/app'
import { GetServerSideProps, GetStaticProps } from 'next'
import Table from 'organisms/table'
import theme from 'assets/styles/theme'
import { GetAllRgs } from 'services/data/get-all-rgs'
import { parseCookies } from 'nookies'

const ListarTodosScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <h3 style={{ marginBottom: 15, color: theme.colors.primary }}>
        Listagem de Solicitações registradas
      </h3>
      <Table data={data} contents={['nome_completo', 'nome_da_mae', 'cpf', 'motivo', 'contato', 'data_de_solicitacao' ]} />
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@IIPM/user']: idUser } = parseCookies(ctx)
  const data = await GetAllRgs(idUser)
  return { props: { data } }
}

export default ListarTodosScreen
