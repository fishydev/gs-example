import axios from "axios"

import { API_URL, API_KEY } from "@/config"
import { useNotificationStore } from "@/stores/notification"

export const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
})

// axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response.data.message || error.message
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    })

    return Promise.reject(error)
  }
)
// })
