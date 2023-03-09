import React from "react"

import {
  clearErrorAction,
  createProductAction,
  deleteProductAction,
  getImageAction,
  readProductsAction,
  updateProductAction,
} from "~redux/slices/productsSlice"
import {CreateProductArgs, ReadProductsArgs, UpdateProductArgs} from "~api/routes/products"

import {useAppDispatch, useAppSelector} from "."
import useNotification from "./useNotification"

const initialArgs: ReadProductsArgs = {filter: "", fltProdAndCat: 2}

const useProducts = () => {
  const {products, loading, error} = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const {showNotification} = useNotification()

  React.useEffect(() => {
    if (error) {
      const message = error.response?.data
      if (typeof message === "string") showNotification(message, "error")
      dispatch(clearErrorAction())
    }
  }, [error])

  const readProducts = (args: ReadProductsArgs = initialArgs) => dispatch(readProductsAction(args))
  const createProduct = async (args: CreateProductArgs) => {
    const product = await dispatch(createProductAction(args)).unwrap()
    if (product) readProducts(initialArgs)
  }
  const updateProduct = async (args: UpdateProductArgs) => {
    const product = await dispatch(updateProductAction(args)).unwrap()
    if (product) readProducts(initialArgs)
  }
  const deleteProduct = async (id: number) => {
    const message = await dispatch(deleteProductAction(id)).unwrap()
    showNotification(message, "success")
    readProducts(initialArgs)
  }

  const getImage = (id: number) => dispatch(getImageAction(id)).unwrap()

  return {products, loading, readProducts, updateProduct, createProduct, deleteProduct, getImage}
}

export default useProducts
