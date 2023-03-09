import React from "react"
import Sidebar from "react-sidebar"

import {Page} from "~components/."
import {useBreakpoints, useCategories} from "~hooks/."

import ProductsSection from "./components/ProductsSection"
import CategoriesSection from "./components/categories/CategoriesSection"
import ProductsActions from "./components/ProductsActions"

const Products: React.FC = () => {
  const {isDesktop, isMobile} = useBreakpoints()
  const {showCategoiresSidebar, setShowCategoiresSidebar} = useCategories()

  return (
    <Sidebar
      contentClassName="mt-20 sm:mt-8 lg:mt-10"
      sidebar={<CategoriesSection />}
      open={!isDesktop && showCategoiresSidebar}
      transitions={!isDesktop}
      onSetOpen={setShowCategoiresSidebar}
      sidebarClassName={"w-full z-20 bg-white"}>
      <Page title="Товары и категории">
        {!isMobile && <ProductsActions />}

        {isDesktop && (
          <div className="flex items-center sm:mt-5 lg:mt-10">
            <p className="headline mr-5">Товары и категории</p>
          </div>
        )}
        <div className="mt-0 sm:mt-6 lg:mt-15 grid grid-cols-4">
          {isDesktop && <CategoriesSection />}
          <div className="col-span-4 lg:col-span-3 lg:border-r border-black-10">
            <ProductsSection />
          </div>
        </div>
      </Page>
    </Sidebar>
  )
}

export default Products
