import React from "react"

import {Modal} from "~components/."
import {useCategories} from "~hooks/."

type Props = {
  open: boolean
  onClose(): void
}

const DeleteCategoryModal: React.FC<Props> = ({open, onClose}) => {
  const {deleteCategory, activeCategory} = useCategories()

  const onDelete = () => activeCategory && deleteCategory(activeCategory.id).then(onClose).catch(onClose)

  return (
    <Modal
      show={open}
      onClose={onClose}
      wrapClassName="items-center justify-center px-5"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7 w-md">
      <p className="text-center h4">Вы уверены, что хотите удалить категорию «{activeCategory?.name}»?</p>

      <div className="mt-10 flex justify-center">
        <button type="button" className="btn rounded-full mr-3" onClick={onClose}>
          Отменить
        </button>
        <button onClick={onDelete} type="submit" className="btn btn-black rounded-full">
          Да, удалить
        </button>
      </div>
    </Modal>
  )
}

export default DeleteCategoryModal
