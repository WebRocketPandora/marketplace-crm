import React from "react"
import {fetchUserAction} from "~redux/slices/userSlice"
import {useAppDispatch, useAppSelector} from "."

type FetchType = "cache-only" | "cache-first"

const useUser = (fetchType: FetchType = "cache-only") => {
  const dispatch = useAppDispatch()
  const {user, loading} = useAppSelector(state => state.user)

  React.useEffect(() => {
    if (fetchType === "cache-first") dispatch(fetchUserAction())
  }, [fetchType])

  return {user, loading, isLoggedIn: !!user}
}

export default useUser
