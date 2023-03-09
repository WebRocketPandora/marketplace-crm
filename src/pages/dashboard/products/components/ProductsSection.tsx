import React from "react"

import {Checkbox, Input, Spinner} from "~elements/."
import {useBreakpoints, useCategories, useProducts} from "~hooks/."
import {ArrowForward, MagnifyingGlass} from "~icons/."

import ProductItem from "./ProductItem"
import ProductsActions from "./ProductsActions"

type Props = {}

const ProductsSection: React.FC<Props> = () => {
  const {isMobile, isTablet, isDesktop} = useBreakpoints()

  const {loading: categoriesLoading, activeCategory, setShowCategoiresSidebar} = useCategories()
  const {loading: productsLoading, readProducts, products} = useProducts()
  const loading = categoriesLoading || productsLoading
  const onShowSidebar = () => setShowCategoiresSidebar(true)

  const [filter, setFilter] = React.useState("")
  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)

  React.useEffect(() => {
    readProducts({fltProdAndCat: 2, filter, ...(activeCategory ? {parentId: activeCategory.id} : {})})
  }, [activeCategory, filter])

  return (
    <div>
      <div className="p-0 lg:p-5 bg-white lg:bg-background">
        <div className="flex items-end justify-between">
          <div className="flex items-center">
            <p className={isTablet ? "h2" : "h3"}>
              {activeCategory ? (isMobile ? activeCategory.name : `Категория «${activeCategory.name}»`) : "Все товары"}
            </p>
            {isMobile && loading && <Spinner />}
          </div>
          {isMobile && (
            <button className="link text-blue t3" onClick={onShowSidebar}>
              Категории
            </button>
          )}
        </div>
        {isMobile && <ProductsActions className="mt-5" />}
        {isTablet && (
          <button className="mt-5 flex items-center link text-blue t3" onClick={onShowSidebar}>
            <p>Категории товаров</p>
            <ArrowForward className="ml-2" />
          </button>
        )}
        {isDesktop && <p className="h5 mt-8">{activeCategory ? "Товары из категории" : "Товары из всех категорий"}</p>}
      </div>
      {!isTablet && <hr className="mt-4 lg:mt-0 mx-0 border-black-10" />}
      <div className="px-0 lg:px-5 mt-4 sm:mt-8">
        <Input
          inputProps={{value: filter, onChange: onChangeFilter}}
          className="w-full lg:w-1/2"
          accessoaryLeft={<MagnifyingGlass />}
          label="Искать..."
        />
      </div>

      <div className="mt-8">
        <div className="grid-table grid-table-head grid-cols-7 sm:grid-cols-12 gap-1 items-center">
          {!isMobile && (
            <div className="col-span-1">
              <Checkbox />
            </div>
          )}
          <p className={"col-span-1 t2"}>Фото</p>
          <p className={"col-span-3 t2"}>Наименование</p>
          {!isMobile && <p className={"col-span-2 t2"}>Артикул</p>}
          {!isMobile && <p className={"col-span-2 t2"}>Цена</p>}
          <p className={"col-span-2 t2"}>Остаток</p>
          <p className={"col-span-1 t2"}></p>
        </div>

        {products.map(product => (
          <ProductItem key={`product_${product.id}`} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsSection
