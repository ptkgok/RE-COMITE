import React, { createContext, useState } from 'react'
import { IMenuContext } from './IMenuContext'

export const DropdownMenuContext = createContext({} as IMenuContext)

function DropdownMenuProvider({ children }) {
  const [MenuActive, setMenuActive]: any = useState()

  return (
    <DropdownMenuContext.Provider value={{ MenuActive, setMenuActive }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

export default DropdownMenuProvider
