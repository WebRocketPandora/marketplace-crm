import React from "react"

import {Modal} from "~components/."

import WarehouseForm from "./WarehouseForm"

type Props = {
  show: boolean
  onClose(): void
  warehouseId?: string
}

const WarehouseModal: React.FC<Props> = ({warehouseId, show, onClose}) => {
  const title = React.useMemo(() => (warehouseId ? "Редактировать склад" : "Добавить склад"), [warehouseId])

  return (
    <Modal
      show={show}
      onClose={onClose}
      wrapClassName="items-center justify-center"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7 text-center w-full sm:max-w-lg">
      <p className="h3 mb-10 text-black-20">{title}</p>
      <WarehouseForm warehouseId={warehouseId} onAccept={onClose} onReject={onClose} />
    </Modal>
  )
}

export default WarehouseModal
