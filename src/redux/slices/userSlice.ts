import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {ThunkConfig, ThunkState} from "~redux/types"

import api from "~api/."
import {User} from "~api/routes/user"

export interface UserState extends ThunkState {
  user: User | null
}

const initialState: UserState = {
  user: null,
  loading: false,
}

export const fetchUserAction = createAsyncThunk<User, void, ThunkConfig>(
  "user/fetchUser",
  async (_, {rejectWithValue}) => {
    const data = await api.user
      .getUser()
      .then(res => res.data)
      .catch(rejectWithValue)
    return data
  },
)

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorAction: state => {
      state.error = undefined
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserAction.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(fetchUserAction.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUserAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const {clearErrorAction} = authSlice.actions
export default authSlice.reducer
