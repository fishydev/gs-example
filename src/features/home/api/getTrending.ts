import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { TrendingResult } from "../types"

export const getTrending = (): Promise<TrendingResult> => {
  return axiosInstance.get("/trending/all/week")
}

type QueryFnType = typeof getTrending

type UseTrendingOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useTrending = ({ config }: UseTrendingOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["trending"],
    queryFn: () => getTrending(),
  })
}
