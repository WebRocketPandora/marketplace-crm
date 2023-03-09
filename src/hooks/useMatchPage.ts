import {useLocation, useMatch} from "react-router-dom"

const useMatchPage = () => {
  const {pathname} = useLocation()
  const isNewProduct = !!useMatch("/dashboard/products/new")
  const isEditProduct = !!useMatch("/dashboard/products/preview")
  const isPreviewProduct = !!useMatch("/dashboard/products/edit")
  const isNewWarehouse = !!useMatch("/dashboard/warehouses/new")
  const isEditWarehouse = pathname.includes("/dashboard/warehouses/edit")
  const isMarketplaceErrors = pathname.includes("dashboard/marketplaces/errors")
  const isMarketplaceSettings = pathname.includes("/dashboard/marketplaces/settings")

  const isGoBack =
    isNewProduct ||
    isEditProduct ||
    isPreviewProduct ||
    isNewWarehouse ||
    isEditWarehouse ||
    isMarketplaceSettings ||
    isMarketplaceErrors

  return {isGoBack}
}

export default useMatchPage
