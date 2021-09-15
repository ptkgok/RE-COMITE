import React from 'react'
import AppLayout from 'layouts/app'
import { GetServerSideProps } from 'next'
import { PrismaClient } from '@prisma/client'
import Header from 'organisms/header'

const HomeScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <Header />
      <h1>Kooo</h1>
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
