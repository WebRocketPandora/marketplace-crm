import {Breadcrumb, clearBreadcrumbsAction, setBreadcrumbsAction} from "~redux/slices/breadcrumbsSlice"
import {useAppDispatch, useAppSelector} from "./redux"

const useBreadcrumbs = () => {
  const {breadcrumbs} = useAppSelector(state => state.breadcrumbs)
  const dispatch = useAppDispatch()

  const setBreadcrumbs = (breadcrumbs: Breadcrumb[]) => dispatch(setBreadcrumbsAction(breadcrumbs))
  const clearBreadcrumbs = () => dispatch(clearBreadcrumbsAction())

  return {breadcrumbs, setBreadcrumbs, clearBreadcrumbs}
}

export default useBreadcrumbs
