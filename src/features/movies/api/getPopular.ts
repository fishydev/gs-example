import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopularMovie = (): Promise<QueryResult> => {
  return axiosInstance.get(`/movie/popular`)
}

type QueryFnType = typeof getPopularMovie

type UsePopularMovieOptions = {
  config?: QueryConfig<QueryFnType>
}

export const usePopularMovie = ({ config }: UsePopularMovieOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popularMovie"],
    queryFn: () => getPopularMovie(),
    ...config,
  })
}
