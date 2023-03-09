import React from "react"

import {Product} from "~api/routes/products"
import {Modal} from "~components/."
import {useProducts} from "~hooks/."

type Props = {
  open: boolean
  onClose(): void
  product: Product
}

const DeleteProductModal: React.FC<Props> = ({open, onClose, product}) => {
  const {deleteProduct, loading} = useProducts()

  const onDelete = () => deleteProduct(product.id).then(onClose).catch(onClose)

  return (
    <Modal
      show={open}
      onClose={onClose}
      wrapClassName="items-center justify-center px-5"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7 w-md">
      <p className="text-center h4">Вы уверены, что хотите удалить товар «{product.name}»?</p>
      <p className="h5 text-center mt-3 text-black-60">Вся информация также будет удалена</p>

      <div className="mt-10 flex justify-center">
        <button disabled={loading} type="button" className="btn rounded-full mr-3" onClick={onClose}>
          Отменить
        </button>
        <button disabled={loading} onClick={onDelete} type="submit" className="btn btn-black rounded-full">
          Да, удалить
        </button>
      </div>
    </Modal>
  )
}

export default DeleteProductModal
