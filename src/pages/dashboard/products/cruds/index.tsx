import React from "react"
import cls from "classnames"
import {useNavigate} from "react-router-dom"
import {FormProvider, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {GoBack, Page, Preloader} from "~components/."
import {useBreadcrumbs, useBreakpoints, useLocationWithState, useProducts} from "~hooks/."
import {GearShape} from "~icons/."
import {Breadcrumb} from "~redux/slices/breadcrumbsSlice"
import {CreateProductArgs, Product as ProductType, UpdateProductArgs} from "~api/routes/products"
import {blobToFile} from "~utils/index"

import MainSection from "./components/MainSection"
import PhotoSection from "./components/PhotoSection"

const schema = yup
  .object({
    articul: yup.string(),
    barcode: yup.string(),
    name: yup.string().required("Обязательное поле!"),
    price: yup.string(),
  })
  .required()

const breadcrumbs: Breadcrumb[] = [
  {
    lable: "Товары",
    path: "/dashboard/products",
  },
  {
    lable: "Добавить товар",
    path: "/dashboard/products/new",
  },
]

type Props = {
  type: "new" | "edit"
}

type State = {
  product: ProductType
}

const Product: React.FC<Props> = ({type}) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const {state} = useLocationWithState<State>()
  const {product} = state || {}

  const {setBreadcrumbs, clearBreadcrumbs} = useBreadcrumbs()

  React.useEffect(() => {
    setBreadcrumbs(breadcrumbs)
    return () => {
      clearBreadcrumbs()
    }
  }, [])

  const {isMobile, isTablet} = useBreakpoints()
  const {getImage} = useProducts()

  const methods = useForm<CreateProductArgs>({
    resolver: yupResolver(schema),
    defaultValues: {
      articul: "",
      barcode: "",
      name: "",
      photos: [],
    },
  })
  const {handleSubmit, setValue} = methods

  React.useEffect(() => {
    if (type === "edit" && product) {
      setValue("articul", product.articul || "")
      setValue("barcode", product.barcode || "")
      setValue("name", product.name)
      setValue("price", product.price || "")
      if (product.images)
        Promise.all(product.images.map(getImage)).then(photos => setValue("photos", photos.map(blobToFile)))
    }
  }, [type, product])

  const {createProduct, updateProduct, loading} = useProducts()
  const onSubmit = (args: CreateProductArgs) => {
    if (type === "new") createProduct(args).then(goBack)
    if (type === "edit" && product) {
      const updateArgs: UpdateProductArgs = {
        gProductId: product.id,
        isActive: 0,
        ...args,
      }
      updateProduct(updateArgs).then(goBack)
    }
  }

  const RenderSettingsLink: React.FC = React.useCallback(() => {
    return (
      <button className="flex items-center text-black-80 hover:text-black-60 active:text-black">
        <GearShape className="mr-3 w-3 h-3" />
        <p className="t3">Настройки товара</p>
      </button>
    )
  }, [])

  const RenderActions: React.FC = React.useCallback(() => {
    return (
      <div className="flex items-center justify-end">
        {!isMobile && <GoBack className="mr-auto" />}
        {!isMobile && <RenderSettingsLink />}
        <button
          onClick={goBack}
          type="button"
          className={cls("btn ml-5 mr-3 rounded-full", {
            "btn-small": isTablet,
          })}>
          Отменить
        </button>
        <button
          type="submit"
          className={cls("btn btn-green rounded-full", {
            "btn-small": isTablet,
          })}>
          Сохранить
        </button>
      </div>
    )
  }, [isMobile, isTablet])

  if (loading) return <Preloader />

  return (
    <Page title="Добавить товар">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isMobile && <RenderActions />}
          <p className="headline sm:mt-5 lg:mt-10 mb-5 sm:mb-18 lg:mb-20">Добавить товар</p>
          {isMobile && <RenderSettingsLink />}

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 sm:pr-20 lg:pr-0">
            <MainSection />
            <PhotoSection />
          </div>

          {isMobile && <RenderActions />}
        </form>
      </FormProvider>
    </Page>
  )
}

export default Product
function useNavigationWithState() {
  throw new Error("Function not implemented.")
}
