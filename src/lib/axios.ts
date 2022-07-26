import axios from "axios";

import { API_URL, API_KEY } from "@/config"

export const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY
  }
})

// axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {

// })
