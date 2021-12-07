import React, { useEffect } from 'react'
import AppLayout from 'layouts/app'
import { GetServerSideProps } from 'next'
import Table from 'organisms/table'
import theme from 'assets/styles/theme'
import { parseCookies } from 'nookies'
import LoaderTables from 'molecules/loaders'
import { getAllCertSolicitation } from '@services/data/get-all-cert-solicitation'
import moment from 'moment'

const ListarSolicitacaoDeCertidaoScreen: React.FC = ({ data }: any) => {
  console.log(data)

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
          url=""
        />
      ) : (
        <LoaderTables />
      )}
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['@IIPM/user']: user } = parseCookies(ctx)
  const data = await getAllCertSolicitation()

  const changeFields: any = (data: any) => {
    return data.map((item: any) => {
      return {
        ...item,
        // change date format
        data_de_solicitacao: moment(item.data_de_solicitacao).format(
          'DD/MM/YYYY'
        ),
        data_de_agendamento: moment(item.data_de_agendamento).format(
          'DD/MM/YYYY'
        ),
        data_de_nascimento: moment(item.data_de_nascimento).format('DD/MM/YYYY')
      }
    })
  }

  return { props: { data: changeFields(data) } }
}

export default ListarSolicitacaoDeCertidaoScreen
