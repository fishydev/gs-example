import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { QueryResult } from "../types"

export const getPopular = ({
  mediaType,
}: {
  mediaType: string
}): Promise<QueryResult> => {
  return axiosInstance.get(`/${mediaType}/popular`)
}

type QueryFnType = typeof getPopular

type UsePopularOptions = {
  mediaType: string
  config?: QueryConfig<QueryFnType>
}

export const usePopular = ({ mediaType, config }: UsePopularOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["popular", mediaType],
    queryFn: () => getPopular({ mediaType }),
    ...config,
  })
}
