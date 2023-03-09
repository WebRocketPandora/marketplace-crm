import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type Breadcrumb = {
  lable: string
  path: string
}

export interface BreadcrumbsState {
  breadcrumbs?: Breadcrumb[]
}

const initialState: BreadcrumbsState = {
  breadcrumbs: undefined,
}

const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadcrumbsAction: (state, action: PayloadAction<Breadcrumb[]>) => {
      state.breadcrumbs = action.payload
    },
    clearBreadcrumbsAction: state => {
      state.breadcrumbs = undefined
    },
  },
})

export const {setBreadcrumbsAction, clearBreadcrumbsAction} = breadcrumbsSlice.actions
export default breadcrumbsSlice.reducer
