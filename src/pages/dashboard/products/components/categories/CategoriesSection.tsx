import React from "react"
import cls from "classnames"

import {Spinner} from "~elements/."
import SheetModal, {SheetAction} from "~modals/SheetModal"
import {ArrowUturnUp, GearShape, MultiplyCircle, Pencil, Plus, Xmark} from "~icons/."
import {useBreakpoints, useCategories} from "~hooks/."

import AddCategoryModal from "./AddCategoryModal"
import CategoryItem from "./CategoryItem"
import SearchCategories from "./SearchCategories"
import DeleteCategoryModal from "./DeleteCategoryModal"
import RenameCategoryModal from "./RenameCategoryModal"

const CategoriesSection: React.FC = () => {
  const {isMobile, isDesktop} = useBreakpoints()
  const {loading, activeCategory, clearActiveCategory, categories, setShowCategoiresSidebar} = useCategories()

  const onCloseSidebar = () => setShowCategoiresSidebar(false)

  const [triggerCollapse, setTriggerCollapse] = React.useState<boolean>(false)
  const onTriggerCollapse = () => setTriggerCollapse(!triggerCollapse)

  const [showAddCategoryModal, setShowAddCategoryModal] = React.useState<boolean>(false)
  const toggleAddCategoryModal = (show: boolean) => () => setShowAddCategoryModal(show)

  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = React.useState<boolean>(false)
  const toggleDeleteCategoryModal = (show: boolean) => () => setShowDeleteCategoryModal(show)

  const [showRenameCategoryModal, setShowRenameCategoryModal] = React.useState<boolean>(false)
  const toggleRenameCategoryModal = (show: boolean) => () => setShowRenameCategoryModal(show)

  const [showSheetActions, setShowSheetActions] = React.useState<boolean>(false)
  const toggleShowSheetActions = (show: boolean) => () => setShowSheetActions(show)

  const onAddCategory = () => {
    setShowAddCategoryModal(true)
    clearActiveCategory()
    onTriggerCollapse()
  }

  const AddCategory: React.FC = React.useCallback(() => {
    return (
      <div onClick={onAddCategory} className="flex items-center cursor-pointer text-blue hover:border-b">
        <Plus className="mr-2" />
        <p className={isMobile ? "t4" : "t3"}>Добавить{!isMobile && " категорию"}</p>
      </div>
    )
  }, [isMobile])

  const sheetActions: SheetAction[] = React.useMemo(
    () => [
      {
        title: "Добавить подкатегорию",
        Icon: Xmark,
        iconClassName: "transform rotate-45",
        onClick: toggleAddCategoryModal(true),
      },
      {
        title: "Переименовать категорию",
        Icon: Pencil,
        onClick: toggleRenameCategoryModal(true),
      },
      {
        title: "Удалить категорию",
        Icon: MultiplyCircle,
        onClick: toggleDeleteCategoryModal(true),
      },
      {
        title: "Настройки категории",
        Icon: GearShape,
        onClick: () => {},
      },
      {
        title: "Привязать товары",
        Icon: ArrowUturnUp,
        onClick: () => {},
      },
    ],
    [],
  )

  return (
    <>
      <div className="col-span-1 border-r border-black-10">
        {!isDesktop && (
          <div className="px-4">
            <div className="py-5 flex justify-end">
              <button onClick={onCloseSidebar}>
                <Xmark />
              </button>
            </div>
            <div className="mt-8 mb-2 flex items-end justify-between">
              <div className="flex items-center">
                <p className="h3">Категории{!isMobile && " товаров"}</p>
                {loading && <Spinner />}
              </div>
              <AddCategory />
            </div>
          </div>
        )}
        <div className="p-4 flex items-center border-b border-black-10">
          <button className="btn p-0 h-8 w-8 mr-2" onClick={toggleAddCategoryModal(true)}>
            <Xmark className="w-3 h-3 transform rotate-45" />
          </button>
          <button className="btn p-0 h-8 w-8 mr-2">
            <Pencil className="w-3 h-3" />
          </button>
          <button className="btn p-0 h-8 w-8 mr-2" onClick={activeCategory && toggleDeleteCategoryModal(true)}>
            <Xmark className="w-3 h-3" />
          </button>
          <p className="t3 hover:underline cursor-pointer ml-auto" onClick={onTriggerCollapse}>
            Свернуть все
          </p>
        </div>

        <SearchCategories />

        <div className="mt-6">
          <div
            onClick={clearActiveCategory}
            className={cls("relative px-5 py-1 transition hover:bg-black-10 cursor-pointer", {
              "bg-blue-10 hover:bg-blue-10": !activeCategory,
            })}>
            <p className="t2">Все</p>
            {!activeCategory && <div className="absolute w-1 inset-y-0 right-0 bg-blue" />}
          </div>

          {categories.map(category => (
            <CategoryItem
              actions={sheetActions}
              showActions={toggleShowSheetActions(true)}
              key={`category_${category.id}`}
              category={category}
              triggerCollapse={triggerCollapse}
            />
          ))}
        </div>

        <div className="mt-5 p-4 border-t border-black-10 flex">{isDesktop && <AddCategory />}</div>
      </div>

      <AddCategoryModal open={showAddCategoryModal} onClose={toggleAddCategoryModal(false)} />
      <DeleteCategoryModal open={showDeleteCategoryModal} onClose={toggleDeleteCategoryModal(false)} />
      <RenameCategoryModal open={showRenameCategoryModal} onClose={toggleRenameCategoryModal(false)} />
      <SheetModal show={showSheetActions} sheetActions={sheetActions} onClose={toggleShowSheetActions(false)} />
    </>
  )
}

export default CategoriesSection
