import React from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import {Page, GoBack} from "~components/."
import {useBreadcrumbs, useBreakpoints} from "~hooks/."
import {Clock, XCircle} from "~icons/."
import {Breadcrumb} from "~redux/slices/breadcrumbsSlice"

const breadcrumbs: Breadcrumb[] = [
  {
    lable: "Маркетплейсы",
    path: "/dashboard/marketplaces",
  },
  {
    lable: "Журнал ошибок",
    path: "/dashboard/marketplaces/errors",
  },
]

const Errors: React.FC = () => {
  const {setBreadcrumbs, clearBreadcrumbs} = useBreadcrumbs()

  React.useEffect(() => {
    setBreadcrumbs(breadcrumbs)
    return () => {
      clearBreadcrumbs()
    }
  }, [])

  const {isMobile, isTablet} = useBreakpoints()

  return (
    <Page title="Журнал ошибок">
      {!isMobile && (
        <div className="flex items-center">
          <GoBack />
          <button
            className={cls("btn pointer-events-none bg-transparent", {
              "btn-small": isTablet,
            })}
          />
        </div>
      )}
      <p className="headline sm:mt-5 lg:mt-10 mb-8">Журнал ошибок</p>
      <div className="mt-6">
        <p className="h5 uppercase text-black-70">Сегодня</p>
        <Link to="id">
          <div className="cursor-pointer transition-all bg-background-element hover:bg-black-10 active:bg-black-10 px-5 py-6 rounded-lg mt-6">
            <div className="flex justify-between">
              <div className="flex items-center text-blue">
                <Clock className="mr-3" />
                <p className="h4">22.05.2022 19:50</p>
              </div>
              <p className="h4">Kaspi</p>
            </div>
            <hr className="mt-4 border-black-10" />
            <p className="mt-4 t4 text-black-60">Текст ошибки</p>
            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 mt-3">
              <XCircle className="text-red m-1" />
              <p className="col-span-5 sm:col-span-8 lg:col-span-10 line-clamp-2 sm:line-clamp-1">
                Неизвестная ошибка при сохранении реквизитов товара Неизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товара
              </p>
            </div>
          </div>
        </Link>
        <Link to="id">
          <div className="cursor-pointer transition-all bg-background-element hover:bg-black-10 active:bg-black-10 px-5 py-6 rounded-lg mt-6">
            <div className="flex justify-between">
              <div className="flex items-center text-blue">
                <Clock className="mr-3" />
                <p className="h4">22.05.2022 19:50</p>
              </div>
              <p className="h4">Kaspi</p>
            </div>
            <hr className="mt-4 border-black-10" />
            <p className="mt-4 t4 text-black-60">Текст ошибки</p>
            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 mt-3">
              <XCircle className="text-red m-1" />
              <p className="col-span-5 sm:col-span-8 lg:col-span-10 line-clamp-2 sm:line-clamp-1">
                Неизвестная ошибка при сохранении реквизитов товара Неизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товара
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-6">
        <p className="h5 uppercase text-black-70">Сегодня</p>
        <Link to="id">
          <div className="cursor-pointer transition-all bg-background-element hover:bg-black-10 active:bg-black-10 px-5 py-6 rounded-lg mt-6">
            <div className="flex justify-between">
              <div className="flex items-center text-blue">
                <Clock className="mr-3" />
                <p className="h4">22.05.2022 19:50</p>
              </div>
              <p className="h4">Kaspi</p>
            </div>
            <hr className="mt-4 border-black-10" />
            <p className="mt-4 t4 text-black-60">Текст ошибки</p>
            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 mt-3">
              <XCircle className="text-red m-1" />
              <p className="col-span-5 sm:col-span-8 lg:col-span-10 line-clamp-2 sm:line-clamp-1">
                Неизвестная ошибка при сохранении реквизитов товара Неизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товара
              </p>
            </div>
          </div>
        </Link>
        <Link to="id">
          <div className="cursor-pointer transition-all bg-background-element hover:bg-black-10 active:bg-black-10  px-5 py-6 rounded-lg mt-6">
            <div className="flex justify-between">
              <div className="flex items-center text-blue">
                <Clock className="mr-3" />
                <p className="h4">22.05.2022 19:50</p>
              </div>
              <p className="h4">Kaspi</p>
            </div>
            <hr className="mt-4 border-black-10" />
            <p className="mt-4 t4 text-black-60">Текст ошибки</p>
            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 mt-3">
              <XCircle className="text-red m-1" />
              <p className="col-span-5 sm:col-span-8 lg:col-span-10 line-clamp-2 sm:line-clamp-1">
                Неизвестная ошибка при сохранении реквизитов товара Неизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
                товараНеизвестная ошибка при сохранении реквизитов товара
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Page>
  )
}

export default Errors
