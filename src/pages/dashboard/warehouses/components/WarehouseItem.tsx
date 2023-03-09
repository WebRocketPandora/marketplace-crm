import React from "react"
import {useNavigate} from "react-router-dom"
import cls from "classnames"

import {Warehouse} from "~redux/slices/warehousesSlice"
import SheetModal, {SheetAction} from "~modals/SheetModal"
import {ActionMenu, MultiplyCircle, Pencil} from "~icons/."
import {Dropdown} from "~components/."
import {useBreakpoints, useWarehouses} from "~hooks/."

import WarehouseDeleteModal from "./WarehouseDeleteModal"
import WarehouseModal from "./WarehouseModal"

const WarehouseItem: React.FC<Warehouse> = props => {
  const {id, warehouseName, address} = props
  const {isMobile, isTablet, isDesktop} = useBreakpoints()
  const navigate = useNavigate()
  const {deleteWarehouse} = useWarehouses()

  const [showModal, setShowModal] = React.useState<boolean>(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false)
  const closeDeleteModal = () => setShowDeleteModal(false)
  const openDeleteModal = () => setShowDeleteModal(true)

  const [showEditModal, setShowEditModal] = React.useState<boolean>(false)
  const closeEditModal = () => setShowEditModal(false)
  const openEditModal = () => setShowEditModal(true)

  const sheetActions: SheetAction[] = React.useMemo(
    () => [
      {
        title: "Редактировать склад",
        onClick: () => (isDesktop ? openEditModal() : navigate(`/dashboard/warehouses/edit/${id}`)),
        Icon: Pencil,
      },
      {
        title: "Удалить склад",
        onClick: openDeleteModal,
        Icon: MultiplyCircle,
      },
    ],
    [isDesktop, id],
  )

  const onDelete = () => {
    deleteWarehouse(id)
    closeDeleteModal()
  }

  const RenderActionButton: React.FC = React.useCallback(() => {
    if (isDesktop)
      return (
        <Dropdown
          items={sheetActions}
          className="justify-self-end"
          wrapClassName="bg-white right-0 bottom-0 shadow-small w-59"
          itemClassName="text-black-60 pr-4 py-3 hover:bg-blue-10 hover:text-black">
          <div className="p-4 hover:text-black-90 active:text-black-80">
            <ActionMenu />
          </div>
        </Dropdown>
      )
    return (
      <button onClick={openModal} className="p-4 hover:text-black-90 active:text-black-80 justify-self-end">
        <ActionMenu />
      </button>
    )
  }, [isDesktop])

  return (
    <div className="grid-table grid-table-item grid-cols-6">
      <p
        className={cls("col-span-2", {
          ["t3"]: isMobile,
          ["t2"]: isTablet || isDesktop,
        })}>
        {warehouseName}
      </p>
      <p
        className={cls("col-span-3", {
          ["t3"]: isMobile,
          ["t2"]: isTablet || isDesktop,
        })}>
        {address}
      </p>
      <RenderActionButton />

      <SheetModal show={!!showModal} onClose={closeModal} sheetActions={sheetActions} />
      <WarehouseDeleteModal show={!!showDeleteModal} onClose={closeDeleteModal} onDelete={onDelete} />
      <WarehouseModal show={showEditModal} onClose={closeEditModal} warehouseId={id} />
    </div>
  )
}

export default WarehouseItem
