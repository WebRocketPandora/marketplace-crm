import React from "react"
import {useNavigate} from "react-router-dom"
import cls from "classnames"

import {Page} from "~components/."
import {Input} from "~elements/."
import {MagnifyingGlass} from "~icons/."
import {useBreakpoints, useWarehouses} from "~hooks/."
import {Warehouse} from "~redux/slices/warehousesSlice"

import WarehouseItem from "./components/WarehouseItem"
import WarehouseModal from "./components/WarehouseModal"

const filter = (warehouse: Warehouse, query: string) =>
  warehouse.warehouseName.toLowerCase().includes(query.toLowerCase()) ||
  warehouse.address?.toLowerCase().includes(query.toLowerCase())

const Warehouses: React.FC = () => {
  const [search, setSearch] = React.useState<string>("")

  const {warehouses} = useWarehouses()
  const {isMobile, isTablet, isDesktop} = useBreakpoints()
  const navigate = useNavigate()

  const [showModal, setShowModal] = React.useState<boolean>(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  const RenderAddButton: React.FC = React.useCallback(() => {
    const toNew = () => (isDesktop ? openModal() : navigate("/dashboard/warehouses/new"))

    return (
      <button
        onClick={toNew}
        className={cls("btn btn-blue mt-5 sm:mt-0 w-full sm:w-auto sm:ml-auto", {
          "btn-small": isTablet,
        })}>
        Добавить склад
      </button>
    )
  }, [isTablet])

  const RenderSearch: React.FC = React.useCallback(() => {
    return (
      <Input
        className="mt-6 sm:mt-8 lg:mt-0 w-full sm:w-3/4"
        accessoaryLeft={<MagnifyingGlass />}
        label={"Искать..."}
        inputProps={{
          value: search,
          onChange: e => setSearch(e.target.value),
        }}
      />
    )
  }, [])

  return (
    <Page title="Склады">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          {isDesktop && <RenderSearch />}
          {!isMobile && <RenderAddButton />}
        </div>
        <p className="headline sm:mt-5 lg:mt-10">Склады</p>
        {isMobile && <RenderAddButton />}
        {!isDesktop && <RenderSearch />}

        <div className="grid-table grid-table-head grid-cols-6 mt-8">
          <p
            className={cls("col-span-2", {
              ["t4"]: isMobile,
              ["t2"]: isTablet || isDesktop,
            })}>
            Наименование
          </p>
          <p
            className={cls("col-span-4", {
              ["t4"]: isMobile,
              ["t2"]: isTablet || isDesktop,
            })}>
            Адрес
          </p>
        </div>
        {warehouses
          .filter(ware => filter(ware, search))
          .map(ware => (
            <WarehouseItem key={ware.id} {...ware} />
          ))}
      </div>

      <WarehouseModal show={showModal} onClose={closeModal} />
    </Page>
  )
}

export default Warehouses
