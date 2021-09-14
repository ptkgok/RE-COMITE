import React from 'react'
import Head from 'next/head'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Authentication/AuthContext'

import Logo from '../assets/logomeegu.png'

import { Container } from '../styles/pages/Home'
import TopMenu from '../components/Menu/TopMenu'
import DropdownMenu from '../components/Menu/DropdownMenu'
import { LPTop } from '../styles/pages/LPLayout'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <LPTop>
        <img src={Logo} width="90px" />
        <DropdownMenu />
      </LPTop>
    </Container>
  )
}

export default Home
