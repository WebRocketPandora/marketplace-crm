import axiosInstance from "axios"
import api from "."

const env = import.meta.env

const axios = axiosInstance.create({baseURL: env.VITE_API_URL})

axios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken")
  if (accessToken && config.headers) config.headers["X-Auth-Token"] = accessToken
  return config
}, Promise.reject)

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    const accessToken = localStorage.getItem("accessToken")
    const refreshToken = localStorage.getItem("refreshToken")

    if (refreshToken && error.response.status === 409 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshRequest = await api.auth.refreshTokens(accessToken, refreshToken)
      if (refreshRequest.status === 200) {
        localStorage.setItem("accessToken", refreshRequest.data["X-Auth-Token"])
        localStorage.setItem("refreshToken", refreshRequest.data["Refresh-Token"])
        return axiosInstance(originalRequest)
      }
    }
    return Promise.reject(error)
  },
)

export default axios
