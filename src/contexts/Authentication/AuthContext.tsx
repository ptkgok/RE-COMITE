import React, { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { signInAdmRequest, signInRequest } from '../../services/auth'
import { api } from '../../services/api'
import { AuthContextType, SignInData } from './Types'

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState<any>({})

  const isAuthenticated = !!usuario

  useEffect(() => {
    const { '@IIPM/token': token } = parseCookies()
    const { ['@IIPM/user']: usuario } = parseCookies()

    if (usuario === "undefined") {
      setUsuario(null)
      destroyCookie({}, '@IIPM/user')
      destroyCookie({}, '@IIPM/token')
    }
  }, [])

  async function signIn({ email, senha }: SignInData) {
    try {
      const { token, usuario } = await signInRequest({ email, senha })

      setCookie(undefined, '@IIPM/token', token, {
        maxAge: 60 * 60 * 1
      })
      setCookie(undefined, '@IIPM/user', JSON.stringify(usuario), {
        maxAge: 60 * 60 * 1
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`
      setUsuario(usuario)

      Router.push('/home')
    } catch (error) {
      console.error(error)
    }
  }

  async function signInAdm({ email, senha }: SignInData) {
    try {
      const { token, usuario } = await signInAdmRequest({ email, senha })

      setCookie(undefined, '@IIPM/token', token, {
        maxAge: 60 * 60 * 1
      })
      setCookie(undefined, '@IIPM/user', JSON.stringify(usuario), {
        maxAge: 60 * 60 * 1
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`
      setUsuario(usuario)

      Router.push('/adm/home')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signInAdm }}>
      {children}
    </AuthContext.Provider>
  )
}
