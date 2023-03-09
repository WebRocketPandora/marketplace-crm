import React from "react"
import {useNavigate} from "react-router-dom"
import cls from "classnames"
import CopyToClipboard from "react-copy-to-clipboard"

import {Controller, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {Input} from "~elements/."
import {Page, Preloader, GoBack} from "~components/."
import {UpdateExternalServiceArgs, ExternalService} from "~api/routes/integration"
import {Duplicate} from "~icons/."
import {useBreadcrumbs, useBreakpoints, useIntegration, useLocationWithState, useNotification} from "~hooks/."
import {Breadcrumb} from "~redux/slices/breadcrumbsSlice"

const breadcrumbs: Breadcrumb[] = [
  {
    lable: "Маркетплейсы",
    path: "/dashboard/marketplaces",
  },
  {
    lable: "Настроить Kaspi",
    path: "/dashboard/marketplaces/settings/kaspi",
  },
]

type State = {
  service?: ExternalService
}

const schema = yup
  .object({
    id: yup.number().required(),
    merchantId: yup.string().required("Обязательное поле!"),
  })
  .required()

const Kaspi: React.FC = () => {
  const {setBreadcrumbs, clearBreadcrumbs} = useBreadcrumbs()

  React.useEffect(() => {
    setBreadcrumbs(breadcrumbs)
    return () => {
      clearBreadcrumbs()
    }
  }, [])

  const navigate = useNavigate()
  const {showNotification} = useNotification()
  const {state} = useLocationWithState<State>()
  const {isMobile, isTablet, isDesktop} = useBreakpoints()

  const {updateExternalService, enableExternalService, loading} = useIntegration()

  const [service, setService] = React.useState<ExternalService>()

  React.useEffect(() => {
    if (!state || !state.service || state.service.code !== "kaspi") return navigate("/dashboard/marketplaces")
    setService(state.service)
  }, [state])

  const onCopy = () => showNotification("Сcылка скопирована в буфер обмена!", "success")

  const {control, handleSubmit} = useForm<UpdateExternalServiceArgs>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: state?.service?.id,
      merchantId: state?.service?.merchantId,
    },
  })

  const onReset = () => navigate(-1)
  const onSubmit = async (args: UpdateExternalServiceArgs) => {
    const updatedService = await updateExternalService(args, !!!service?.apiKey)
    state!!.service = updatedService
    setService(updatedService)
  }

  const onNewLink = async () => {
    const updatedService = await enableExternalService({id: service?.id!!, regenerateApiKey: true})
    state!!.service = updatedService
    setService(updatedService)
  }

  const RenderActionButtons: React.FC = React.useCallback(() => {
    return (
      <div className="flex justify-end">
        {!isMobile && <GoBack className="mr-auto" />}
        <button
          type="reset"
          className={cls("btn rounded-full mr-3", {
            "btn-small": isTablet,
          })}>
          Отменить
        </button>
        <button
          type="submit"
          className={cls("btn rounded-full btn-green", {
            "btn-small": isTablet,
          })}>
          Сохранить
        </button>
      </div>
    )
  }, [isTablet])

  const RenderExportLink: React.FC = React.useCallback(() => {
    const link = import.meta.env.VITE_API_URL + "/products?api_key=" + service?.apiKey

    return (
      <>
        <div className="mt-8 sm:mt-10 flex items-center justify-between">
          <p className="uppercase h5">ccылка на файл</p>
          <button onClick={onNewLink} type="button" className="btn btn-small btn-blue">
            Новая ссылка
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-2">
          <p className="line-clamp-2 col-span-3">{link}</p>
          <CopyToClipboard text={link} onCopy={onCopy}>
            <button type="button" className="link text-blue flex items-center ml-auto">
              <Duplicate className="mr-2" />
              Скопировать
            </button>
          </CopyToClipboard>
        </div>
        <p className="mt-3 t4 bg-black-10 text-black-60 p-3 rounded-r-full rounded-b-full">
          *Укажите эту ссылку в настройках выгрузки Kaspi
        </p>
      </>
    )
  }, [service])

  if (loading) return <Preloader />

  return (
    <Page title="Kaspi">
      <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        {!isMobile && <RenderActionButtons />}
        <p className="headline sm:mt-5 lg:mt-10">Настройка Kaspi</p>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="uppercase h5">основное</p>
            <Controller<UpdateExternalServiceArgs>
              control={control}
              name="merchantId"
              render={({field, fieldState: {error}}) => (
                <Input
                  className="mt-6"
                  label={"Merchant id (MID)"}
                  error={error?.message}
                  inputProps={field}
                  required
                />
              )}
            />
            <p className="mt-5 t4 bg-black-10 text-black-60 p-3 rounded-r-full rounded-b-full">
              *Скопируйте в личном кабинете Kaspi
            </p>
            {!!service?.apiKey && <RenderExportLink />}
            {!isDesktop && <hr className="mt-8 sm:mt-10 border-black-10" />}

            {isMobile && (
              <div className="mt-20">
                <RenderActionButtons />
              </div>
            )}
          </div>
        </div>
      </form>
    </Page>
  )
}

export default Kaspi
