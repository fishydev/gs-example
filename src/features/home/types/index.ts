export type TrendingItem = {
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

export type TrendingResult = {
  page: number
  results: TrendingItem[]
  total_pages: number
  total_results: number
}
