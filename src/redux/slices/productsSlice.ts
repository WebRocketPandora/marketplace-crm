import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import api from "~api/index"
import {CreateProductArgs, UpdateProductArgs, Product, ProductResponse, ReadProductsArgs} from "~api/routes/products"
import {ThunkConfig, ThunkState} from "~redux/types"

export interface ProductsState extends ThunkState {
  products: Product[]
}

const initialState: ProductsState = {
  products: [],
  loading: false,
}

export const readProductsAction = createAsyncThunk<Product[], ReadProductsArgs, ThunkConfig>(
  "categories/readProducts",
  async (args, {rejectWithValue}) => {
    const data = await api.products
      .readProducts(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const createProductAction = createAsyncThunk<ProductResponse, CreateProductArgs, ThunkConfig>(
  "products/createProduct",
  async (args, {rejectWithValue}) => {
    try {
      const data = await api.products.createProduct(args).then(res => res.data)
      await api.products.uploadImages(data.gProductId, args.photos)
      return data
    } catch (e: any) {
      throw rejectWithValue(e)
    }
  },
)

export const updateProductAction = createAsyncThunk<string, UpdateProductArgs, ThunkConfig>(
  "products/updateProduct",
  async (args, {rejectWithValue}) => {
    try {
      await api.products.deleteImage({productId: args.gProductId})
      const data = await api.products.updateProduct(args).then(res => res.data)
      await api.products.uploadImages(args.gProductId, args.photos)
      return data
    } catch (e: any) {
      throw rejectWithValue(e)
    }
  },
)

export const deleteProductAction = createAsyncThunk<string, number, ThunkConfig>(
  "categories/deleteProduct",
  async (id, {rejectWithValue}) => {
    const data = await api.products
      .deleteProduct(id)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const getImageAction = createAsyncThunk<Blob, number, ThunkConfig>(
  "categories/getImage",
  async (id, {rejectWithValue}) => {
    const data = await api.products
      .getImage(id)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearErrorAction: state => {
      state.error = undefined
    },
  },
  extraReducers: builder => {
    builder.addCase(readProductsAction.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })
    builder.addCase(readProductsAction.pending, state => {
      state.loading = true
    })
    builder.addCase(readProductsAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(createProductAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(createProductAction.pending, state => {
      state.loading = true
    })
    builder.addCase(createProductAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(updateProductAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(updateProductAction.pending, state => {
      state.loading = true
    })
    builder.addCase(updateProductAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(deleteProductAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(deleteProductAction.pending, state => {
      state.loading = true
    })
    builder.addCase(deleteProductAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(getImageAction.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(getImageAction.pending, state => {
      state.loading = true
    })
    builder.addCase(getImageAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const {clearErrorAction} = productsSlice.actions

export default productsSlice.reducer
