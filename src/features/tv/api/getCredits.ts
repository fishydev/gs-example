import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { TvCredits } from "../types"

export const getCredits = ({ tvId }: { tvId: string }): Promise<TvCredits> => {
  return axiosInstance.get(`/tv/${tvId}/credits`)
}

type QueryFnType = typeof getCredits

type useTvCreditOptions = {
  tvId: string
  config?: QueryConfig<QueryFnType>
}

export const useTvCredits = ({ tvId, config }: useTvCreditOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["tvCredits", tvId],
    queryFn: () => getCredits({ tvId }),
    ...config,
  })
}
