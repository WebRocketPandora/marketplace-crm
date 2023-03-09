import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {ThunkConfig, ThunkState} from "~redux/types"

import api from "~api/."
import {LoginArgs, Tokens} from "~api/routes/auth"

import {fetchUserAction} from "./userSlice"

export interface AuthState extends ThunkState {}

const initialState: AuthState = {
  loading: false,
}

export const loginAction = createAsyncThunk<Tokens, LoginArgs, ThunkConfig>(
  "auth/login",
  async (args, {rejectWithValue, dispatch}) => {
    const response = await api.auth
      .login(args)
      .then(res => {
        const tokens = res.data
        localStorage.setItem("accessToken", tokens["X-Auth-Token"])
        localStorage.setItem("refreshToken", tokens["Refresh-Token"])
        dispatch(fetchUserAction())
        return tokens
      })
      .catch(rejectWithValue)
    return response
  },
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorAction: state => {
      state.error = undefined
    },
    logoutAction: () => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAction.pending, state => {
      state.loading = true
      state.error = undefined
    })
    builder.addCase(loginAction.fulfilled, state => {
      state.loading = false
      state.error = undefined
    })
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const {clearErrorAction, logoutAction} = authSlice.actions
export default authSlice.reducer
