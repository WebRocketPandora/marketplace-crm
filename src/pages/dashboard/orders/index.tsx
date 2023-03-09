import React from "react"
import cls from "classnames"

import {Page} from "~components/."
import {useBreakpoints} from "~hooks/."
import {Input} from "~elements/."
import {ArrowUpDown, Equalizer, MagnifyingGlass} from "~icons/."

const Orders: React.FC = () => {
  const {isMobile, isTablet, isDesktop} = useBreakpoints()

  const RenderExportButton: React.FC = React.useCallback(() => {
    return (
      <button
        className={cls("btn btn-blue-light", {
          "btn-small": isTablet,
        })}>
        <ArrowUpDown className="mr-3" />
        Экспорт{isMobile && "ировать"}
      </button>
    )
  }, [isTablet, isMobile])

  return (
    <Page title="Заказы">
      <div className="flex flex-row-reverse">
        {!isMobile && <RenderExportButton />}
        {isDesktop && (
          <div className="flex-1 mr-4">
            <Input accessoaryLeft={<MagnifyingGlass />} label="Искать..." />
          </div>
        )}
      </div>
      <p className="headline sm:mt-5 lg:mt-10">Заказы</p>
      <div className="flex flex-col mt-5">
        {isMobile && <RenderExportButton />}
        {isMobile && <hr className="mb-4 border-black-10" />}
        {!isDesktop && (
          <div className="flex mt-4 sm:mt-6">
            <div className="flex-1">
              <Input accessoaryLeft={<MagnifyingGlass />} label="Искать..." />
            </div>
            <button className="btn ml-2">
              <Equalizer className="sm:mr-3" />
              {isTablet && "Фильтры"}
            </button>
          </div>
        )}
      </div>
      <div>{/* <Select items={[{ label: "A", value: "a" }]} /> */}</div>
    </Page>
  )
}

export default Orders
