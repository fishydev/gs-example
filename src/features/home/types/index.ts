import { PagedResult } from "@/types"

import { Tv } from "@/features/tv/types"
import { Movie } from "@/features/movies/types"

export type TrendingResult = {
  results: Tv[] | Movie[]
} & PagedResult

export type PopularMoviesResult = {
  results: Movie[]
} & PagedResult

export type PopularTvResult = {
  results: Tv[]
} & PagedResult
