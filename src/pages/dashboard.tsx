import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React from 'react';
import { getAPIClient } from '../services/axios';
import TopMenu from '../components/Menu/TopMenu';

import { Layout, Content, TitlePage } from '../styles/pages/LayoutDashboard';
import { Column, GridRow, Row } from '../styles/grids';
import MediumCard from '../components/UIKits/Cards/MediumCards';
import { BiFilm } from 'react-icons/bi';

const Dashboard: React.FC = () => {

  return (
    <Layout>
      <TopMenu />
      <Content>
        <TitlePage>Bem vindo, Patrick</TitlePage>
        <GridRow>
          <MediumCard title="Netflix" >
            <BiFilm />
          </MediumCard>


          <MediumCard title="Netflix">
            <BiFilm />
          </MediumCard>



          <MediumCard title="Netflix">
            <BiFilm />
          </MediumCard>
        </GridRow>

        <GridRow>
          <MediumCard title="Netflix" >
            <BiFilm />
          </MediumCard>


          <MediumCard title="Netflix">
            <BiFilm />
          </MediumCard>



          <MediumCard title="Netflix">
            <BiFilm />
          </MediumCard>
        </GridRow>

      </Content>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { ['@gok/token']: token } = parseCookies(ctx)

  if (!token) ctx.res.writeHead(302, { Location: '/' }).end()
  // const user = await apiClient.get('/usuarios')
  return {
    props: {}
  }
}

export default Dashboard;