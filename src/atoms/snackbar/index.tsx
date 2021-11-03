import { NotificationContext } from 'contexts/Notification'
import React, { useContext, useEffect } from 'react'

import * as S from './styles'

const SnackBar: React.FC = () => {
  const { ShowMessage,setShowMessage , Message } = useContext(NotificationContext)

  useEffect(()=>{
    if(ShowMessage===true) setTimeout(()=>setShowMessage(!ShowMessage),5000)
  },[ShowMessage])

  return (
    ShowMessage && (
      <S.Container>
        <S.Text>{Message}</S.Text>
      </S.Container>
    )
  )
}

export default SnackBar