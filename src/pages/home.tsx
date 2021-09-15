import React from 'react'
import AppLayout from 'layouts/app'
import { GetServerSideProps } from 'next'
import { PrismaClient } from '@prisma/client'
import Header from 'organisms/header'
import CardItems from 'atoms/card'
import { BiAccessibility } from 'react-icons/bi'

const HomeScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <Header />
      <CardItems
        title="Criar Posto"
        description="Crie postos e atrele a usuários!"
        icon={<BiAccessibility />}
      />
    </AppLayout>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const prisma = new PrismaClient()

//   const data = await prisma.user.findMany()

//   return {
//     props: {
//       data
//     }
//   }
// }

export default HomeScreen
