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

export type TvDetail = {
  backdrop_path: string | null
  first_air_date: string
  genres: TvGenre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  name: string
  number_of_episodes: number
  number_of_seasons: number
  overview: string
  popularity: number
  poster_path: string | null
  seasons: TvSeason[]
  status: string
  tagline: string | null
  type: string
  vote_average: number
  vote_count: number
}

export type TvSeason = {
  air_date: Date
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}
