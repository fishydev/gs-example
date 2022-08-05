import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { MovieDetail } from "../types"

export const getDetail = ({
  movieId,
}: {
  movieId: string
}): Promise<MovieDetail> => {
  return axiosInstance.get(`/movie/${movieId}`)
}

type QueryFnType = typeof getDetail

type useMovieDetailOptions = {
  movieId: string
  config?: QueryConfig<QueryFnType>
}

export const useMovieDetail = ({ movieId, config }: useMovieDetailOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["movieDetail", movieId],
    queryFn: () => getDetail({ movieId }),
    ...config,
  })
}
