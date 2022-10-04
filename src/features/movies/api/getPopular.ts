import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopularMovie = (
  pageNumber: number,
  query: string
): Promise<QueryResult> => {
  if (query) {
    return axiosInstance.get(`/search/movie`, {
      params: {
        page: pageNumber,
        query: query,
      },
    })
  }
  return axiosInstance.get(`/movie/popular`, {
    params: {
      page: pageNumber,
    },
  })
}

type QueryFnType = typeof getPopularMovie

type UsePopularMovieOptions = {
  pageNumber: number
  query: string
  config?: QueryConfig<QueryFnType>
}

export const usePopularMovie = ({
  config,
  query,
  pageNumber,
}: UsePopularMovieOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popularMovie", pageNumber, query],
    queryFn: () => getPopularMovie(pageNumber, query),
    keepPreviousData: true,
    ...config,
  })
}
