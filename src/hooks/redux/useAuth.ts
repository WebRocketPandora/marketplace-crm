import React from "react"
import {useNavigate} from "react-router-dom"
import {LoginArgs} from "~api/routes/auth"
import {clearErrorAction, loginAction, logoutAction} from "~redux/slices/authSlice"
import {persistor} from "~redux/store"
import {useAppDispatch, useAppSelector} from "."
import useNotification from "./useNotification"

const useAuth = () => {
  const navigate = useNavigate()
  const {showNotification} = useNotification()
  const dispatch = useAppDispatch()
  const {error, loading} = useAppSelector(state => state.auth)

  React.useEffect(() => {
    if (error) {
      const message = error.response?.data as string
      showNotification(message, "error")
      dispatch(clearErrorAction())
    }
  }, [error])

  const login = (args: LoginArgs) =>
    dispatch(loginAction(args))
      .unwrap()
      .then(() => {
        navigate("/")
      })

  const logout = () => {
    persistor.purge()
    dispatch(logoutAction())
    persistor.flush()
  }

  return {login, logout, loading}
}

export default useAuth
