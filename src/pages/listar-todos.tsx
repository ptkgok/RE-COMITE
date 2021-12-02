import React from 'react'
import AppLayout from 'layouts/app'
import { GetServerSideProps, GetStaticProps } from 'next'
import Table from 'organisms/table'
import theme from 'assets/styles/theme'
import { GetAllRgs } from 'services/data/get-all-rgs'
import { parseCookies } from 'nookies'
import LoaderTables from 'molecules/loaders'

const ListarTodosScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <h3 style={{ marginBottom: 15, color: theme.colors.primary }}>
        Listagem de Solicitações registradas
      </h3>
      {data.length > 0 ? (
        <Table
          data={data}
          contents={[
            'nome_completo',
            'nome_da_mae',
            'cpf',
            'motivo',
            'contato',
            'data_de_solicitacao'
          ]}
        />
      ) : (
        <LoaderTables />
      )}
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['@IIPM/user']: user } = parseCookies(ctx)
  const data = await GetAllRgs(user?.id)
  return { props: { data } }
}

export default ListarTodosScreen
