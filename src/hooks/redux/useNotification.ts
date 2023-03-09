import {hideNotificationAction, Message, Type, showNotificationAction} from "~redux/slices/notificationSlice"
import {useAppDispatch, useAppSelector} from "."

const useNotification = () => {
  const {message, type} = useAppSelector(state => state.notification)
  const dispatch = useAppDispatch()
  const hideNotification = () => dispatch(hideNotificationAction())

  const showNotification = (message: Message, type: Type = "info") => {
    const res = dispatch(showNotificationAction({message, type}))
    setTimeout(hideNotification, 3000)
    return res
  }

  return {showNotification, hideNotification, message, type}
}

export default useNotification
