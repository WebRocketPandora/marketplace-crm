import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ThunkConfig, ThunkState} from "~redux/types"

import api from "~api/."
import {Category, CreateCategoryArgs, ReadCategoriesArgs, UpdateCategoryArgs} from "~api/routes/categories"

export interface CategoriesState extends ThunkState {
  categories: Category[]
  activeCategory?: Category
  showCategoiresSidebar: boolean
}

const initialState: CategoriesState = {
  categories: [],
  showCategoiresSidebar: false,
  loading: false,
}

export const readCategoriesAction = createAsyncThunk<Category[], ReadCategoriesArgs, ThunkConfig>(
  "categories/readCategories",
  async (args, {rejectWithValue}) => {
    const data = await api.categories
      .readCategories(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const createCategoryAction = createAsyncThunk<string, CreateCategoryArgs, ThunkConfig>(
  "categories/createCategory",
  async (args, {rejectWithValue}) => {
    const data = await api.categories
      .createCategory(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const deleteCategoryAction = createAsyncThunk<string, number, ThunkConfig>(
  "categories/deleteCategory",
  async (id, {rejectWithValue}) => {
    const data = await api.categories
      .deleteCategory(id)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const updateCategoryAction = createAsyncThunk<string, UpdateCategoryArgs, ThunkConfig>(
  "categories/updateCategory",
  async (args, {rejectWithValue}) => {
    const data = await api.categories
      .updateCategory(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearErrorAction: state => {
      state.error = undefined
    },
    clearActiveCategoryAction: state => {
      state.activeCategory = undefined
    },
    setActiveCategoryAction: (state, action: PayloadAction<Category>) => {
      state.activeCategory = action.payload
    },
    showCategoriesSidebarAction: (state, action: PayloadAction<boolean>) => {
      state.showCategoiresSidebar = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(readCategoriesAction.fulfilled, (state, action) => {
      state.loading = false
      state.categories = action.payload
    })
    builder.addCase(readCategoriesAction.pending, state => {
      state.loading = true
    })
    builder.addCase(readCategoriesAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(createCategoryAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(createCategoryAction.pending, state => {
      state.loading = true
    })
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(deleteCategoryAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(deleteCategoryAction.pending, state => {
      state.loading = true
    })
    builder.addCase(deleteCategoryAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(updateCategoryAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(updateCategoryAction.pending, state => {
      state.loading = true
    })
    builder.addCase(updateCategoryAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const {clearErrorAction, clearActiveCategoryAction, setActiveCategoryAction, showCategoriesSidebarAction} =
  categoriesSlice.actions

export default categoriesSlice.reducer
