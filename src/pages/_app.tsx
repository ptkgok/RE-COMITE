import React, { useContext, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'assets/styles/global'
import theme from 'assets/styles/theme'
import { AuthProvider } from 'contexts/Authentication/AuthContext'
import NotificationProvider from 'contexts/Notification'
import SnackBar from 'atoms/snackbar'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <SnackBar />
        <ThemeProvider 
        theme={theme}
        >
          
          <Component 
          {...pageProps} 
          />
          <GlobalStyle />
        </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default MyApp
