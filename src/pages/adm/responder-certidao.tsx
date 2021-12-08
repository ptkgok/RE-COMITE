import AppLayout from '@layouts/app'
import FormResponseSolicitation from '@organisms/forms/responder-solicitacao'
import { GetServerSideProps } from 'next'
import React from 'react'

const ResponseCertificationScreen: React.FC = ({ id }) => {
  return (
    <AppLayout>
      <FormResponseSolicitation id={id} />
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query

  return {
    props: { id: id }
  }
}

export default ResponseCertificationScreen
