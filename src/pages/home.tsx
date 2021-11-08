import React, { useContext } from 'react'
import AppLayout from 'layouts/app'
import ListOfOptionsFeatures from 'atomic/organisms/list-of-options-features'
import { FeaturesCardList } from 'services/utils/features-card-list'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'


const HomeScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      <ListOfOptionsFeatures list={FeaturesCardList} />
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@IIPM/token']: token } = parseCookies(ctx)
  
  if (!token) {
    ctx.res.setHeader("location", "/");
    ctx.res.statusCode = 302;
    ctx.res.end();
    return { props: {} }
  }

  return {
    props: {}
  }
}

export default HomeScreen
