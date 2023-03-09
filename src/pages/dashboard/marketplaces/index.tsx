import React from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import {MenuCard} from "~icons/."
import {Page, Preloader} from "~components/."
import {useBreakpoints, useIntegration} from "~hooks/."

import MarketplaceItem from "./components/MarketplaceItem"

const Marketplaces: React.FC = () => {
  const {externalServices, fetchExternalServices, loading} = useIntegration()
  const {isMobile, isTablet} = useBreakpoints()

  React.useEffect(() => {
    fetchExternalServices()
  }, [])

  const RenderActionButtons: React.FC = React.useCallback(() => {
    return (
      <Link to="errors">
        <button
          className={cls("btn mt-5 sm:mt-0 w-full sm:w-auto", {
            "btn-small": isTablet,
          })}>
          <MenuCard className="mr-4" />
          Журнал ошибок <span className="text-red ml-1">•</span>
        </button>
      </Link>
    )
  }, [isTablet])

  if (loading) return <Preloader />

  return (
    <Page title="Маркетплейсы">
      <div className="flex justify-end">{!isMobile && <RenderActionButtons />}</div>
      <p className="headline sm:mt-5 lg:mt-10">Маркетплейсы</p>
      <p className="mt-4 sm:mt-5 lg:mt-6 text-black-60 w-full sm:w-2/3 lg:w-1/3">
        Вы можете включить маркетплейс. Для этого необходимо настроить его.
      </p>
      {isMobile && <RenderActionButtons />}
      <div className="mt-3 sm:mt-8">
        {externalServices.map(service => (
          <MarketplaceItem key={`ext_serv_${service.code}`} {...service} />
        ))}
      </div>
    </Page>
  )
}

export default Marketplaces
