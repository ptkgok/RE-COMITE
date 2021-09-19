import React from 'react'
import { PrismaClient } from '@prisma/client'
import AppLayout from 'layouts/app'
import { GetStaticProps } from 'next'
import Table from 'organisms/table'
import theme from 'assets/styles/theme'

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
  const prisma = new PrismaClient()
  const data = await prisma.user.findMany()
  return { props: { data } }
}

export default ListarTodosScreen
