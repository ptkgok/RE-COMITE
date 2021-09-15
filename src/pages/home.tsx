import React from 'react'
import AppLayout from 'layouts/app'
import { useForm } from 'react-hook-form'
import Table from 'organisms/table'
import { GetServerSideProps, GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'

const HomeScreen: React.FC = ({ data }: any) => {
  // const { register, handleSubmit, watch } = useForm()
  // const onSubmit = data => console.log(data)

  return (
    <AppLayout>
      <div style={{ display: 'flex', gap: 10 }}>
        <Table data={data} contents={['email', 'name']} />
      </div>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()

  const data = await prisma.user.findMany()

  return {
    props: {
      data
    }
  }
}

export default HomeScreen
