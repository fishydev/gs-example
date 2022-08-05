import { Cast } from "@/features/people/types"
import { PagedResult } from "@/types"

export type Tv = {
  adult: boolean
  backdrop_path: string | null
  id: number
  name: string
  original_language: string
  original_name: string
  overview: string
  poster_path: string | null
  media_type: string
  genre_ids: number[]
  popularity: number
  first_air_date: string
  vote_average: number
  vote_count: number
  origin_country: string
}

export type TvPopular = {
  results: Tv[]
} & PagedResult

export type TvGenre = {
  id: number
  name: string
}

export type TvCredits = {
  id: number
  cast: Cast[]
}
