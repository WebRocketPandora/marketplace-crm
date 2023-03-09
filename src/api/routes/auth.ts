import axios from "~api/axios"

export type Tokens = {
  "X-Auth-Token": string
  "Refresh-Token": string
}

export type LoginArgs = {
  email: string
  password: string
}

const auth = {
  refreshTokens: (accessToken: string | null, refreshToken: string) =>
    axios.post<Tokens>(`/refresh-tokens?access-token=${accessToken}&refresh-token=${refreshToken}`),
  login: ({email, password}: LoginArgs) => axios.get<Tokens>(`/logon-oauth2?username=${email}&password=${password}`),
}

export default auth
