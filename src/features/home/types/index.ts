import { PagedResult } from "@/types"

import { Tv } from "@/features/tv/types"
import { Movie } from "@/features/movies/types"

export type QueryResult = {
  results: Tv[] | Movie[]
} & PagedResult
