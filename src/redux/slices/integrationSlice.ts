import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {ThunkConfig, ThunkState} from "~redux/types"

import api from "~api/."
import {
  DisableExternalServiceArgs,
  EnableExternalServiceArgs,
  ExternalService,
  UpdateExternalServiceArgs,
} from "~api/routes/integration"

export interface IntegrationState extends ThunkState {
  externalServices: ExternalService[]
}

const initialState: IntegrationState = {
  externalServices: [],
  loading: false,
}

export const fetchExternalServicesAction = createAsyncThunk<ExternalService[], void, ThunkConfig>(
  "integration/fetchExternalServices",
  async (_, {rejectWithValue}) => {
    const data = await api.integration
      .readExternalServices()
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const updateExternalServiceAction = createAsyncThunk<ExternalService, UpdateExternalServiceArgs, ThunkConfig>(
  "integration/updateExternalService",
  async (args, {rejectWithValue}) => {
    const data = await api.integration
      .updateExternalService(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const enableExternalServiceAction = createAsyncThunk<ExternalService, EnableExternalServiceArgs, ThunkConfig>(
  "integration/enableExternalService",
  async (args, {rejectWithValue}) => {
    const data = await api.integration
      .enableExternalService(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

export const disableExternalServiceAction = createAsyncThunk<ExternalService, DisableExternalServiceArgs, ThunkConfig>(
  "integration/disableExternalService",
  async (args, {rejectWithValue}) => {
    const data = await api.integration
      .disableExternalService(args)
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

const integrationSlice = createSlice({
  name: "integration",
  initialState,
  reducers: {
    clearErrorAction: state => {
      state.error = undefined
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchExternalServicesAction.fulfilled, (state, action) => {
      state.loading = false
      state.externalServices = action.payload
    })
    builder.addCase(fetchExternalServicesAction.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchExternalServicesAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(updateExternalServiceAction.fulfilled, (state, action) => {
      state.loading = false
      const index = state.externalServices.findIndex(e => e.id === action.payload.id)
      state.externalServices[index] = action.payload
    })
    builder.addCase(updateExternalServiceAction.pending, state => {
      state.loading = true
    })
    builder.addCase(updateExternalServiceAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(enableExternalServiceAction.fulfilled, (state, action) => {
      state.loading = false
      const index = state.externalServices.findIndex(e => e.id === action.payload.id)
      state.externalServices[index] = action.payload
    })
    builder.addCase(enableExternalServiceAction.pending, state => {
      state.loading = true
    })
    builder.addCase(enableExternalServiceAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(disableExternalServiceAction.fulfilled, (state, action) => {
      state.loading = false
      const index = state.externalServices.findIndex(e => e.id === action.payload.id)
      state.externalServices[index] = action.payload
    })
    builder.addCase(disableExternalServiceAction.pending, state => {
      state.loading = true
    })
    builder.addCase(disableExternalServiceAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const {clearErrorAction} = integrationSlice.actions
export default integrationSlice.reducer
