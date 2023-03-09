import axios from "~api/axios"
import {toQueryString} from "~utils/."

export type ExternalService = {
  id: number
  usersId: number
  code: string
  url: string
  method: string
  headers: string
  parameters: string
  isActive: number
  lastDate: string
  lastResult: string
  companyName: string
  merchantId: string
  apiKey: string
}

export interface EnableExternalServiceArgs {
  id: number
  regenerateApiKey: boolean
}

export interface DisableExternalServiceArgs {
  id: number
  clearApiKey: boolean
}

export interface UpdateExternalServiceArgs {
  id: number
  url?: string
  method?: string
  headers?: string
  parameters?: string
  companyName?: string
  merchantId?: string
}

const integration = {
  readExternalServices: () => axios.get<ExternalService[]>("/integration/readExternalServices"),

  enableExternalService: (args: EnableExternalServiceArgs) =>
    axios.post<ExternalService>(`/integration/enableExternalService?${toQueryString<EnableExternalServiceArgs>(args)}`),

  disableExternalService: (args: DisableExternalServiceArgs) =>
    axios.post<ExternalService>(
      `/integration/disableExternalService?${toQueryString<DisableExternalServiceArgs>(args)}`,
    ),

  updateExternalService: (args: UpdateExternalServiceArgs) =>
    axios.post<ExternalService>(`/integration/updateExternalService?${toQueryString<UpdateExternalServiceArgs>(args)}`),
}

export default integration
