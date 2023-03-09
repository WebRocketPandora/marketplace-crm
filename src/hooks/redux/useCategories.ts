import React from "react"
import {Category, CreateCategoryArgs, ReadCategoriesArgs, UpdateCategoryArgs} from "~api/routes/categories"
import {
  clearActiveCategoryAction,
  clearErrorAction,
  createCategoryAction,
  deleteCategoryAction,
  readCategoriesAction,
  setActiveCategoryAction,
  showCategoriesSidebarAction,
  updateCategoryAction,
} from "~redux/slices/categoriesSlice"
import {useAppDispatch, useAppSelector} from "."
import useNotification from "./useNotification"

const initialArgs: ReadCategoriesArgs = {filter: "", fltProdAndCat: 1}

const useCategories = () => {
  const {categories, showCategoiresSidebar, activeCategory, loading, error} = useAppSelector(state => state.categories)

  const dispatch = useAppDispatch()
  const {showNotification} = useNotification()

  React.useEffect(() => {
    if (error) {
      const message = error.response?.data as string
      showNotification(message, "error")
      dispatch(clearErrorAction())
    }
  }, [error])

  const readCategories = (args: ReadCategoriesArgs = initialArgs) => dispatch(readCategoriesAction(args))

  const createCategory = async (args: CreateCategoryArgs) => {
    const message = await dispatch(createCategoryAction(args)).unwrap()
    if (message) showNotification("Успешно!", "success")
    readCategories(initialArgs)
  }

  const deleteCategory = async (id: number) => {
    const message = await dispatch(deleteCategoryAction(id)).unwrap()
    showNotification(message, "success")
    readCategories(initialArgs)
    clearActiveCategory()
  }

  const updateCategory = async (args: UpdateCategoryArgs) => {
    const message = await dispatch(updateCategoryAction(args)).unwrap()
    showNotification(message, "success")
    readCategories(initialArgs)
  }

  const clearActiveCategory = () => dispatch(clearActiveCategoryAction())
  const setActiveCategory = (category: Category) => dispatch(setActiveCategoryAction(category))

  const setShowCategoiresSidebar = (show: boolean) => dispatch(showCategoriesSidebarAction(show))

  return {
    categories,
    activeCategory,
    showCategoiresSidebar,
    readCategories,
    createCategory,
    deleteCategory,
    updateCategory,
    clearActiveCategory,
    setActiveCategory,
    setShowCategoiresSidebar,
    loading,
  }
}

export default useCategories
