import AppLayout from 'layouts/app'
import FormSolicitarCertidao from 'organisms/forms/solicitar-certidao'
import React from 'react'

const SolicitarCertidaoScreen: React.FC = () => {
  return (
    <AppLayout>
      <h3>Solicitar Certidão</h3>
      <FormSolicitarCertidao />
    </AppLayout>
  )
}

export default SolicitarCertidaoScreen
