import React from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import {Switch} from "~elements/."
import {ExternalService} from "~api/routes/integration"
import {useBreakpoints, useIntegration} from "~hooks/."
import kaspi from "~images/kaspi.png"

interface Props extends ExternalService {}

const MarketplaceItem: React.FC<Props> = props => {
  const {id, code, isActive, apiKey} = props
  const {isMobile, isTablet, isDesktop} = useBreakpoints()
  const {enableExternalService, disableExternalService} = useIntegration()

  const handleChange = React.useCallback(() => {
    if (isActive) disableExternalService({id, clearApiKey: false})
    else enableExternalService({id, regenerateApiKey: false})
  }, [isActive])

  const RenderMarketplaceStatus: React.FC = React.useCallback(() => {
    return !!apiKey ? (
      <></>
    ) : (
      <p
        className={cls("text-black-60", {
          "col-span-full text-center t4": isMobile,
          ["t4 mr-2"]: isTablet,
          ["t2 mr-4"]: isDesktop,
        })}>
        Маркетплейс не настроен.
      </p>
    )
  }, [isMobile, isDesktop, isTablet, apiKey])

  return (
    <div className="py-5 sm:py-6 grid grid-cols-5 sm:grid-cols-9 items-center border-b-1 border-black-10">
      <Switch label={code} checked={!!isActive} onChange={handleChange} disabled={!!!apiKey} />
      <div className="flex items-center">
        <img src={code === "kaspi" ? kaspi : undefined} width={24} height={24} alt="kaspi" className="w-6 h-6 mr-2" />
        <p className="col-span-2 t2 truncate capitalize">{code}</p>
      </div>
      <div className="col-span-2 sm:col-span-6 justify-self-end flex items-center">
        {!isMobile && <RenderMarketplaceStatus />}
        <Link to={`settings/${code}`} state={{service: {...props}}}>
          <button
            className={cls("rounded-full", {
              "btn-blue-light": !!apiKey,
              "btn-blue": !!!apiKey,
              "link text-blue": isMobile,
              "btn btn-small": isTablet,
              ["btn"]: isDesktop,
            })}>
            Настроить
          </button>
        </Link>
      </div>
      {isMobile && <RenderMarketplaceStatus />}
    </div>
  )
}

export default MarketplaceItem
