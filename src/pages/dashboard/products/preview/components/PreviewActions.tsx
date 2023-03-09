import React from "react"
import {Link, useNavigate} from "react-router-dom"
import ReactTooltip from "react-tooltip"
import cls from "classnames"

import {Product} from "~api/routes/products"
import {GoBack} from "~components/."
import {useBreakpoints} from "~hooks/."
import {ActionMenu, MultiplyCircle, Pencil, Portrait} from "~icons/."
import SheetModal, {SheetAction} from "~modals/SheetModal"

import DeleteProductModal from "./DeleteProductModal"

type Props = {
  product: Product
}

const PreviewActions: React.FC<Props> = ({product}) => {
  const navigate = useNavigate()
  const {isMobile, isTablet} = useBreakpoints()

  const [showActions, setShowActions] = React.useState<boolean>(false)
  const toggleActions = (show: boolean) => () => setShowActions(show)

  const [showDeleteModal, setDeleteModal] = React.useState<boolean>(false)
  const toggleDeleteModal = (show: boolean) => () => setDeleteModal(show)

  const actions: SheetAction[] = [
    {
      Icon: Pencil,
      title: "Редактировать товар",
      onClick: () => navigate("../edit", {state: {product}}),
    },
    {
      Icon: Portrait,
      title: "Дублировать товар",
    },
    {
      Icon: MultiplyCircle,
      title: "Удалить товар",
      onClick: toggleDeleteModal(true),
    },
  ]

  return (
    <div className="flex items-center justify-end">
      {!isMobile && <GoBack className="mr-auto" />}
      {isMobile && (
        <button onClick={toggleActions(true)} className="absolute top-5 z-1 px-2 text-black active:text-black-60">
          <ActionMenu />
        </button>
      )}
      {!isMobile && (
        <>
          <button
            onClick={toggleDeleteModal(true)}
            className={cls("btn ml-5 mr-3", {
              "btn-small": isTablet,
            })}>
            Удалить
          </button>
          <button
            data-tip="Дублировать товар"
            data-for="duplicate"
            className={cls("btn mr-3 p-0 w-8 lg:w-12 rounded-full", {
              "btn-small": isTablet,
            })}>
            <Portrait />
          </button>
          <Link
            to="../edit"
            state={{product}}
            className={cls("btn btn-blue", {
              "btn-small": isTablet,
            })}>
            Редактировать
          </Link>
        </>
      )}

      <ReactTooltip id="duplicate" place="bottom" type="dark" effect="solid" />
      <DeleteProductModal open={showDeleteModal} onClose={toggleDeleteModal(false)} product={product} />
      {isMobile && <SheetModal show={showActions} onClose={toggleActions(false)} sheetActions={actions} />}
    </div>
  )
}

export default PreviewActions
