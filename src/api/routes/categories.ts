import {AxiosResponse} from "axios"

import axios from "~api/axios"
import {toQueryString} from "~utils/."

import {AttributesList} from "./attributes"

export type Category = {
  id: number
  recId: number
  parentRecId: number
  parentId: number
  name: string
  articul?: string
  barcode?: string
  brand: string
  price?: string
  isCategory: number
  isActive: number
  attributes: AttributesList
  children?: Category[]
  images: number[] | null
}

export interface ReadCategoriesArgs {
  fltProdAndCat: number
  filter: string
  parentId?: number
}

export interface CreateCategoryArgs {
  parentId: number | null
  name: string
}

export interface UpdateCategoryArgs extends CreateCategoryArgs {
  id: number
}

const categories = {
  readCategories: (args: ReadCategoriesArgs) =>
    axios.get<Category[]>(`/integration/readCategories?${toQueryString(args)}`),
  createCategory: (args: CreateCategoryArgs) =>
    axios.post<string, AxiosResponse<string>, CreateCategoryArgs>("/integration/createCategory", args),
  deleteCategory: (id: number) => axios.post<string>(`/integration/deleteCategory?id=${id}`),
  updateCategory: (args: UpdateCategoryArgs) =>
    axios.post<string, AxiosResponse<string>, UpdateCategoryArgs>("/integration/updateCategory", args),
}

export default categories
