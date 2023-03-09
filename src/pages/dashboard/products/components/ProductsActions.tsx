import React from "react"
import {useNavigate} from "react-router-dom"
import cls from "classnames"

import {Spinner} from "~elements/."
import {ArrowDownToLine, ArrowUpDown} from "~icons/."
import {Dropdown} from "~components/."
import SheetModal, {SheetAction} from "~modals/SheetModal"
import {useBreakpoints, useCategories, useProducts} from "~hooks/."

type Props = {
  className?: string
}

const ProductsActions: React.FC<Props> = ({className}) => {
  const navigate = useNavigate()
  const toAddProduct = () => navigate("new")

  const {isMobile, isTablet, isDesktop} = useBreakpoints()
  const {loading: categoriesLoading} = useCategories()
  const {loading: productsLoading} = useProducts()
  const loading = categoriesLoading || productsLoading

  const [showImExSheet, setShowInExSheet] = React.useState<boolean>(false)
  const toggleShowInExSheet = (show: boolean) => () => setShowInExSheet(show)

  const sheetActions: SheetAction[] = [
    {title: "Импортировать", Icon: ArrowDownToLine},
    {
      title: "Экспортировать",
      Icon: ({className, ...restProps}) => (
        <ArrowDownToLine className={cls("transform rotate-180", className)} {...restProps} />
      ),
    },
  ]

  return (
    <>
      <div className={cls("flex items-center sm:flex-row-reverse", className)}>
        <button
          onClick={toAddProduct}
          className={cls("btn btn-blue w-full sm:w-auto mr-2 sm:mr-0", {
            "btn-small": isTablet,
          })}>
          Добавить товар
        </button>

        {isDesktop ? (
          <Dropdown
            className="ml-auto mr-3"
            wrapClassName="bg-white left-0 -bottom-32 shadow-small w-full"
            itemClassName="text-black-60 pr-4 py-3 hover:bg-blue-10 hover:text-black"
            items={sheetActions}>
            <div
              className={cls("btn btn-blue-light", {
                "btn-small": isTablet,
              })}>
              <ArrowUpDown className="lg:mr-4" /> {isDesktop && "Импорт/Экспорт"}
            </div>
          </Dropdown>
        ) : (
          <button
            className={cls("btn btn-blue-light sm:ml-auto sm:mr-3", {
              "btn-small": isTablet,
            })}
            onClick={toggleShowInExSheet(true)}>
            <ArrowUpDown className="lg:mr-4" /> {isDesktop && "Импорт/Экспорт"}
          </button>
        )}

        {!isMobile && loading && <Spinner className="w-8 h-8" />}
      </div>
      <SheetModal show={showImExSheet} onClose={toggleShowInExSheet(false)} sheetActions={sheetActions} />
    </>
  )
}

export default ProductsActions
