import React from "react"
import {Link} from "react-router-dom"

import {LogoutModal} from "~modals/."
import {ArrowForward, Power} from "~icons/."
import {Avatar, Page} from "~components/."
import {useAuth, useUser} from "~hooks/."

const Additional: React.FC = () => {
  const {user} = useUser()
  const {logout} = useAuth()

  const [showModal, setShowModal] = React.useState<boolean>(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  const onLogout = () => {
    logout()
    closeModal()
  }

  return (
    <Page title="Дополнительно">
      <div className="flex items-center">
        <Avatar className="h-16 w-16" />
        <div className="ml-4">
          <p className="t2">{user?.login}</p>
          <button onClick={openModal} className="flex items-center text-blue mt-3">
            <Power className="mr-3" />
            Выход
          </button>
        </div>
      </div>
      <hr className="mt-10 border-background-element" />
      <div className="mt-6">
        <Link to="../settings" className="py-2 flex items-center justify-between cursor-pointer">
          <p>Настройки</p>
          <ArrowForward />
        </Link>
        <Link to="../payments" className="py-2 flex items-center justify-between cursor-pointer">
          <p>Оплаты</p>
          <ArrowForward />
        </Link>
      </div>

      <LogoutModal show={showModal} onClose={closeModal} onLogout={onLogout} />
    </Page>
  )
}

export default Additional
