import AppLayout from '@layouts/app'
import FormResponseSolicitation from '@organisms/forms/responder-solicitacao'
import React from 'react'

const ResponseCertificationScreen: React.FC = () => {
  return (
    <AppLayout>
      <FormResponseSolicitation />
    </AppLayout>
  )
}

export default ResponseCertificationScreen
