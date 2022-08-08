import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopularTv = (): Promise<QueryResult> => {
  return axiosInstance.get(`/tv/popular`)
}

type QueryFnType = typeof getPopularTv

type UsePopularTvOptions = {
  config?: QueryConfig<QueryFnType>
}

export const usePopularTv = ({ config }: UsePopularTvOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popularTv"],
    queryFn: () => getPopularTv(),
    ...config,
  })
}
