import { MenuButton } from 'atoms/menu-buttons'
import React from 'react'
import { BiXCircle } from 'react-icons/bi'

import * as O from './styles'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  closeModal: (isOpen: boolean) => void
}

const Modal: React.FC<Props> = ({ isOpen, closeModal, children }) => {
  return (
    isOpen && (
      <O.Container>
        <O.CloseButton onClick={() => closeModal(!isOpen)}>
          <BiXCircle />
        </O.CloseButton>
        <O.Content>{children}</O.Content>
      </O.Container>
    )
  )
}

export default Modal
