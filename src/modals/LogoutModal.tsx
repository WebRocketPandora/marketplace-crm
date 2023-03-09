import React from "react"

import {Modal} from "~components/."

type Props = {
  show: boolean
  onClose(): void
  onLogout(): void
}

const LogoutModal: React.FC<Props> = ({show, onClose, onLogout}) => {
  return (
    <Modal
      show={show}
      onClose={onClose}
      wrapClassName="items-center justify-center"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7">
      <p className="text-center">Вы уверены, что хотите выйти?</p>
      <div className="mt-10 flex">
        <button className="btn rounded-full mr-3" onClick={onClose}>
          Отменить
        </button>
        <button className="btn btn-black rounded-full" onClick={onLogout}>
          Да, выйти
        </button>
      </div>
    </Modal>
  )
}

export default LogoutModal
