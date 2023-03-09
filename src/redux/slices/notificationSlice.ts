import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type Message = string | null
export type Type = "success" | "info" | "error"

export interface NotificationState {
  message: Message
  type: Type
}

const initialState: NotificationState = {
  message: null,
  type: "info",
}

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotificationAction: (state, action: PayloadAction<NotificationState>) => {
      state.message = action.payload.message
      state.type = action.payload.type
    },
    hideNotificationAction: state => {
      state.message = initialState.message
    },
  },
})

export const {showNotificationAction, hideNotificationAction} = notificationSlice.actions
export default notificationSlice.reducer
