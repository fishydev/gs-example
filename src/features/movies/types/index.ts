import { Cast } from "@/features/people/types"
import { PagedResult } from "@/types"

export type Movie = {
  adult: boolean
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  release_date: string
  id: number
  original_language: string
  original_title: string
  title: string
  media_type: string
  genre_ids: number[]
  popularity: number
  video: boolean
  vote_average: number
  vote_count: number
}

export type MoviePopular = {
  results: Movie[]
} & PagedResult

export type MovieGenre = {
  id: number
  name: string
}

export type MovieDetail = {
  adult: boolean
  backdrop_path: string | null
  budget: number
  genres: MovieGenre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieCredits = {
  id: number
  cast: Cast[]
}

export type QueryResult = {
  results: Movie[]
} & PagedResult
