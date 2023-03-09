import React from "react"
import {
  DisableExternalServiceArgs,
  EnableExternalServiceArgs,
  ExternalService,
  UpdateExternalServiceArgs,
} from "~api/routes/integration"
import {
  clearErrorAction,
  disableExternalServiceAction,
  enableExternalServiceAction,
  fetchExternalServicesAction,
  updateExternalServiceAction,
} from "~redux/slices/integrationSlice"
import {useAppDispatch, useAppSelector} from "."
import useNotification from "./useNotification"

const useIntegration = () => {
  const dispatch = useAppDispatch()
  const {externalServices, error, loading} = useAppSelector(state => state.integration)
  const {showNotification} = useNotification()

  const fetchExternalServices = () => dispatch(fetchExternalServicesAction())

  React.useEffect(() => {
    if (error) {
      const message = error.response?.data as string
      showNotification(message, "error")
      dispatch(clearErrorAction())
    }
  }, [error])

  const updateExternalService = async (
    args: UpdateExternalServiceArgs,
    regenerateApiKey: boolean,
  ): Promise<ExternalService> => {
    const updateResult = await dispatch(updateExternalServiceAction(args)).unwrap()
    const enableResult = await dispatch(
      enableExternalServiceAction({
        id: updateResult.id,
        regenerateApiKey,
      }),
    ).unwrap()
    return enableResult
  }

  const enableExternalService = (args: EnableExternalServiceArgs) =>
    dispatch(enableExternalServiceAction(args)).unwrap()

  const disableExternalService = (args: DisableExternalServiceArgs) => dispatch(disableExternalServiceAction(args))

  return {
    fetchExternalServices,
    externalServices,
    loading,
    updateExternalService,
    enableExternalService,
    disableExternalService,
  }
}

export default useIntegration
