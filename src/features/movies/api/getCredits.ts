import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { MovieCredits } from "../types"

export const getCredits = ({
  movieId,
}: {
  movieId: string
}): Promise<MovieCredits> => {
  return axiosInstance.get(`/movie/${movieId}/credits`)
}

type QueryFnType = typeof getCredits

type useMovieCreditOptions = {
  movieId: string
  config?: QueryConfig<QueryFnType>
}

export const useMovieCredits = ({ movieId, config }: useMovieCreditOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["movieCredits", movieId],
    queryFn: () => getCredits({ movieId }),
    ...config,
  })
}
