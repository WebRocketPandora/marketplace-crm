import {toggleSidebarAction} from "~redux/slices/sidebarSlice"
import {useAppDispatch, useAppSelector} from "."

const useSidebar = () => {
  const dispatch = useAppDispatch()
  const {open} = useAppSelector(state => state.sidebar)

  const toggleSidebar = (open: boolean) => dispatch(toggleSidebarAction(open))

  return {open, toggleSidebar}
}

export default useSidebar
