import {AxiosResponse} from "axios"

import axios from "~api/axios"
import {toQueryString} from "~utils/."

import {Category, ReadCategoriesArgs} from "./categories"

export type Product = Category
export type ReadProductsArgs = ReadCategoriesArgs

export type CreateProductArgs = {
  parentId: number
  articul: string
  barcode: string
  name: string
  price: string
  brand: string
  photos: File[]
}

export type UpdateProductArgs = {
  gProductId: number
  parentId: number
  articul: string
  barcode: string
  name: string
  price: string
  brand: string
  isActive: number
  photos: File[]
}

export type ProductResponse = {
  gProductId: number
  usersId: number
  recId: number
  parentId: number
  articul: string
  barcode: string
  name: string
  price: string
  isCategory: number
  isActive: number
  brand: string
}

export type DeleteImageArgs = {
  id?: number
  productId?: number
}

const products = {
  readProducts: (args: ReadProductsArgs) => axios.get<Product[]>(`/integration/readCategories?${toQueryString(args)}`),
  createProduct: (args: CreateProductArgs) =>
    axios.post<ProductResponse, AxiosResponse<ProductResponse>, CreateProductArgs>("/integration/createProduct", args),
  updateProduct: (args: UpdateProductArgs) =>
    axios.post<string, AxiosResponse<string>, UpdateProductArgs>("/integration/updateProduct", args),
  deleteProduct: (id: number) => axios.post<string>(`/integration/deleteProduct?id=${id}`),
  uploadImages: (id: number, photos: File[]) => {
    const data = new FormData()
    photos.forEach(photo => data.append("photos", photo))
    return axios.post<string, AxiosResponse<string>, FormData>(`/integration/uploadImages?id=${id}`, data)
  },
  deleteImage: (args: DeleteImageArgs) => axios.post<string>(`/integration/deleteImage?${toQueryString(args)}`),
  getImage: (id: number) => axios.get<Blob>(`/integration/getImage?id=${id}`, {responseType: "blob"}),
}

export default products
