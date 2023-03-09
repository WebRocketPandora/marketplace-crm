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
  {
    lable: "Ошибка от 22.05.2022 19:50",
    path: "/dashboard/marketplaces/errors/id",
  },
]

const Error: React.FC = () => {
  const {setBreadcrumbs, clearBreadcrumbs} = useBreadcrumbs()

  React.useEffect(() => {
    setBreadcrumbs(breadcrumbs)
    return () => {
      clearBreadcrumbs()
    }
  }, [])

  const {isMobile, isTablet} = useBreakpoints()

  return (
    <Page title="Ошибка">
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

      <p className="headline sm:mt-5 lg:mt-10">Ошибка</p>
      <p className="headline mt-2 sm:mt-6 lg:mt-8 text-black-20">от 22.05.2022 19:50 </p>

      <div className="bg-background-element px-5 py-6 rounded-lg mt-14">
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
          <p className="col-span-5 sm:col-span-8 lg:col-span-10">
            Неизвестная ошибка при сохранении реквизитов товара Неизвестная ошибка при сохранении реквизитов
            товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
            товараНеизвестная ошибка при сохранении реквизитов товараНеизвестная ошибка при сохранении реквизитов
            товараНеизвестная ошибка при сохранении реквизитов товара
          </p>
        </div>
      </div>

      <p className="t3 mt-8">
        Не удалось разобраться в проблеме? Обратитесь в нашу{" "}
        <Link to="#" className="link text-blue">
          Службу Поддержки
        </Link>
        .
      </p>
    </Page>
  )
}

export default Error
