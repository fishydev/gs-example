import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopularTv = (
  pageNumber: number,
  query: string
): Promise<QueryResult> => {
  if (query) {
    return axiosInstance.get(`/search/tv`, {
      params: {
        page: pageNumber,
        query: query,
      },
    })
  }
  return axiosInstance.get(`/tv/popular`, {
    params: {
      page: pageNumber,
    },
  })
}

type QueryFnType = typeof getPopularTv

type UsePopularTvOptions = {
  pageNumber: number
  query: string
  config?: QueryConfig<QueryFnType>
}

export const usePopularTv = ({
  config,
  pageNumber,
  query,
}: UsePopularTvOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popularTv", pageNumber, query],
    queryFn: () => getPopularTv(pageNumber, query),
    keepPreviousData: true,
    ...config,
  })
}
