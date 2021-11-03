import React, { useContext } from 'react'
import AppLayout from 'layouts/app'
import ListOfOptionsFeatures from 'organisms/list-of-options-features'
import { FeaturesCardList } from 'services/utils/features-card-list'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Button from 'atoms/button'
import SnackBar from 'atoms/snackbar'
import { NotificationContext } from 'contexts/Notification'

const HomeScreen: React.FC = ({ data }: any) => {

  const { ShowMessage ,setShowMessage, setMessage } = useContext(NotificationContext)

  const openSnackbar = () => {
    setShowMessage(!ShowMessage)
    setMessage("CU TESTE CU")
  }
  
  return (
    <AppLayout>
      <Button onClick={openSnackbar} title="Abrir Snackbar" />
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
