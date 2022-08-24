import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopularTv = (pageNumber: number): Promise<QueryResult> => {
  return axiosInstance.get(`/tv/popular`, {
    params: {
      page: pageNumber,
    },
  })
}

type QueryFnType = typeof getPopularTv

type UsePopularTvOptions = {
  pageNumber: number
  config?: QueryConfig<QueryFnType>
}

export const usePopularTv = ({ config, pageNumber }: UsePopularTvOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popularTv", pageNumber],
    queryFn: () => getPopularTv(pageNumber),
    keepPreviousData: true,
    ...config,
  })
}
