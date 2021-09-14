import React from 'react'
import { Prisma, PrismaClient } from '@prisma/client'
import { GetStaticProps } from 'next'

interface PropTypes {
  users: Prisma.UserMinAggregateOutputType[]
}

const Sandbox: React.FC<PropTypes> = props => {
  console.log(props)
  return (
    <div>
      <h1>Sandbox</h1>
      <div>
        {props.users?.map(data => {
          return <div key={data.id}>{data.name}</div>
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  return {
    props: {
      users
    }
  }
}

export default Sandbox
