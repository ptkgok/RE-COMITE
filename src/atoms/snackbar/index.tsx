import { NotificationContext } from 'contexts/Notification'
import React, { useContext, useEffect } from 'react'

import * as S from './styles'

const SnackBar: React.FC = () => {
  const { ShowMessage, setShowMessage, Message, Icon } =
    useContext(NotificationContext)

  useEffect(() => {
    if (ShowMessage === true)
      setTimeout(() => setShowMessage(!ShowMessage), 5000)
  }, [ShowMessage])

  return ShowMessage ? (
    <S.Container>
      {Icon && <S.Text>{Icon}</S.Text>}
      <S.Text>{Message}</S.Text>
    </S.Container>
  ) : null
}

export default SnackBar
