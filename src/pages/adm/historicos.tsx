import AppLayout from 'layouts/app';
import LoaderTables from 'molecules/loaders';
import { GetStaticProps } from 'next';
import Table from 'organisms/table';
import React from 'react';
import { GetAllHistoric } from 'services/data/get-all-historic';

const ManageHistoricsScreen: React.FC = ({ data }: any) => {
  return (
    <AppLayout>
      {data ? <Table data={data} contents={['acao', 'createdAt', 'dia']} /> : <LoaderTables />}
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data = await GetAllHistoric()
  return { props: { data } }
}

export default ManageHistoricsScreen;