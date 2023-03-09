import React from "react"

import {Modal} from "~components/."

type Props = {
  show: boolean
  onClose(): void
  onDelete(): void
}

const WarehouseDeleteModal: React.FC<Props> = ({show, onClose, onDelete}) => {
  return (
    <Modal
      show={show}
      onClose={onClose}
      wrapClassName="items-center justify-center"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7 flex flex-col items-center">
      <p className="h4">Вы уверены, что хотите удалить склад?</p>
      <p className="t3 mt-4 text-black-60">Вся информация также будет удалена</p>
      <div className="flex mt-10">
        <button onClick={onClose} className="btn rounded-full mr-1">
          Отменить
        </button>
        <button onClick={onDelete} className="btn btn-black rounded-full ml-1">
          Да, удалить
        </button>
      </div>
    </Modal>
  )
}

export default WarehouseDeleteModal
