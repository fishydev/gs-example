import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopularMovie = (pageNumber: number): Promise<QueryResult> => {
  return axiosInstance.get(`/movie/popular`, {
    params: {
      page: pageNumber,
    },
  })
}

type QueryFnType = typeof getPopularMovie

type UsePopularMovieOptions = {
  pageNumber: number
  config?: QueryConfig<QueryFnType>
}

export const usePopularMovie = ({
  config,
  pageNumber,
}: UsePopularMovieOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popularMovie"],
    queryFn: () => getPopularMovie(pageNumber),
    ...config,
  })
}
