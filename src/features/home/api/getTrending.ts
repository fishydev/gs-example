import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getTrending = ({
  mediaType,
}: {
  mediaType: string
}): Promise<QueryResult> => {
  return axiosInstance.get(`/trending/${mediaType}/week`)
}

type QueryFnType = typeof getTrending

type UseTrendingOptions = {
  mediaType: string
  config?: QueryConfig<QueryFnType>
}

export const useTrending = ({ mediaType, config }: UseTrendingOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["trending", mediaType],
    queryFn: () => getTrending({ mediaType }),
    ...config,
  })
}
