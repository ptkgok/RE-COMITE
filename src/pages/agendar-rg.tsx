import theme from 'assets/styles/theme'
import AppLayout from 'layouts/app'
import React from 'react'

const AgendarRg: React.FC = () => {
  return (
    <AppLayout>
      <h3 style={{ marginBottom: 15, color: theme.colors.primary }}>
        Solicitação de emissão de RG
      </h3>
    </AppLayout>
  )
}

export default AgendarRg
