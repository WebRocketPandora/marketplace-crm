import React from "react"

import {Page, Preloader} from "~components/."
import {useBreadcrumbs, useLocationWithState} from "~hooks/."
import {Breadcrumb} from "~redux/slices/breadcrumbsSlice"
import {Product} from "~api/routes/products"

import MainSection from "./components/MainSection"
import PhotoSection from "./components/PhotoSection"
import PreviewActions from "./components/PreviewActions"

type State = {
  product: Product
}

const Preview: React.FC = () => {
  const {setBreadcrumbs, clearBreadcrumbs} = useBreadcrumbs()
  const {state} = useLocationWithState<State>()
  const {product} = state || {}

  const breadcrumbs: Breadcrumb[] = React.useMemo(
    () => [
      {
        lable: "Товары",
        path: "/dashboard/products",
      },
      {
        lable: product?.name || "",
        path: "",
      },
    ],
    [],
  )

  React.useEffect(() => {
    setBreadcrumbs(breadcrumbs)
    return () => {
      clearBreadcrumbs()
    }
  }, [])

  if (!product) return <Preloader />

  return (
    <Page title="Добавить товар">
      <PreviewActions product={product} />
      <p className="headline sm:mt-5 lg:mt-10 mb-5 sm:mb-18 lg:mb-20 sm:max-w-2/3 lg:max-w-1/2 !leading-10">
        {product.name}
      </p>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 sm:pr-20 lg:pr-0">
        <MainSection product={product} />
        <PhotoSection />
      </div>
    </Page>
  )
}

export default Preview
