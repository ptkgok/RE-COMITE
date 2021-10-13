import React, { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../../services/auth";
import { api } from "../../services/api";
import { AuthContextType, SignInData } from "./Types";


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<any>({})
  console.log(user)
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@IIPM/token': token } = parseCookies()
    const { ['@IIPM/user']: user } = parseCookies()

    if (token) {
      
      recoverUserInformation().then(response => {
        setUser(JSON.parse(user))
      })
    }
  }, [])

  async function signIn({ email, senha }: SignInData) {

    try {
      const { token, user } = await signInRequest({
        email,
        senha
      })
  
      setCookie(undefined, '@IIPM/token', token, {
        maxAge: 60 * 60 * 1
      })
      setCookie(undefined, '@IIPM/user', JSON.stringify(user), {
        maxAge: 60 * 60 * 1
      })
  
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      setUser(user)
  
      Router.push('/home'); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}