import React from "react"
import {Link, useNavigate} from "react-router-dom"

import {Product} from "~api/routes/products"
import {Dropdown} from "~components/."
import {Checkbox} from "~elements/."
import {useBreakpoints, useProducts} from "~hooks/."
import {ActionMenu, ArrowTriangleForward, ChevronForward, MultiplyCircle, Pencil, Portrait} from "~icons/."
import SheetModal, {SheetAction} from "~modals/SheetModal"

import DeleteProductModal from "./DeleteProductModal"

type Props = {
  product: Product
}

const ProductItem: React.FC<Props> = ({product}) => {
  const navigate = useNavigate()

  const {isMobile, isTablet} = useBreakpoints()
  const {getImage} = useProducts()

  const [previewImg, setPreviewImg] = React.useState<string>()

  React.useEffect(() => {
    const imgId = product.images && product.images[0]
    if (imgId) getImage(imgId).then(URL.createObjectURL).then(setPreviewImg)
  }, [product])

  const [showMore, setShowMore] = React.useState<boolean>(false)
  const toggleShowMore = (open: boolean) => () => setShowMore(open)

  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false)
  const toggleShowDeleteModal = (open: boolean) => () => setShowDeleteModal(open)

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
      onClick: toggleShowDeleteModal(true),
    },
  ]

  return (
    <div className="grid-table grid-table-item grid-cols-7 sm:grid-cols-12 gap-1">
      {!isMobile && (
        <div className="col-span-1 self-center">
          <Checkbox />
        </div>
      )}
      <div className="col-span-1">
        <img className="w-12 h-12 bg-background-element object-cover" src={previewImg} />
      </div>
      <Link to="preview" state={{product}} className="col-span-3 t2 line-clamp-2 link">
        {product.name}
      </Link>
      {!isMobile && <p className="col-span-2 t2">{product.articul}</p>}
      {!isMobile && <p className="col-span-2 t2">{product.price}</p>}
      <div className="col-span-2">
        <div className="flex items-center text-blue cursor-pointer">
          <ArrowTriangleForward className="mr-1" />
          <p className="t2">5</p>
        </div>
      </div>
      <div className="col-span-1 justify-self-end self-center">
        {isMobile ? (
          <Link to="preview" state={{product}} className="p-2 transition text-black-30 hover:text-black">
            <ChevronForward />
          </Link>
        ) : isTablet ? (
          <button className="p-2 transition text-black-30 hover:text-black" onClick={toggleShowMore(true)}>
            <ActionMenu />
          </button>
        ) : (
          <Dropdown
            items={actions}
            className="ml-auto"
            wrapClassName="bg-white right-0 bottom-0 shadow-small w-54"
            itemClassName="text-black-60 pr-4 py-3 hover:bg-blue-10 hover:text-black">
            <div className="p-2 transition text-black-30 hover:text-black">
              <ActionMenu />
            </div>
          </Dropdown>
        )}
      </div>

      <SheetModal show={showMore} onClose={toggleShowMore(false)} sheetActions={actions} />
      <DeleteProductModal open={showDeleteModal} onClose={toggleShowDeleteModal(false)} product={product} />
    </div>
  )
}

export default ProductItem
