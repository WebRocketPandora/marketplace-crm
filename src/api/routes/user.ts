import axios from "~api/axios"

export type User = {
  fn: string
  nm: string
  ft: string
  phone: string
  login: string
}

const user = {
  getUser: () => axios.get<User>("/api/getuser"),
}

export default user
