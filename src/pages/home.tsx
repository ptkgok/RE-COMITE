import React from 'react'
import AppLayout from 'layouts/app'
import ListOfOptionsFeatures from 'organisms/list-of-options-features'
import { FeaturesCardList } from 'services/utils/features-card-list'

const HomeScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <ListOfOptionsFeatures list={FeaturesCardList} />
    </AppLayout>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const data = await prisma.user.findMany()
//   return { props: { data } }
// }

export default HomeScreen
