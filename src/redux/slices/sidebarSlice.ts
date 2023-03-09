import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface SidebarState {
  open: boolean
}

const initialState: SidebarState = {
  open: false,
}

const sidbarSlice = createSlice({
  name: "sidbar",
  initialState,
  reducers: {
    toggleSidebarAction: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
  },
})

export const {toggleSidebarAction} = sidbarSlice.actions
export default sidbarSlice.reducer
