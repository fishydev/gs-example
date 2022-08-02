export type Movie = {
  posterPath?: string | null
  adult?: boolean
  overview?: string
  releaseDate?: string
  genreIds?: number[]
  id?: number
  originalTitle?: string
  title?: string
  backdropPath?: string | null
  popularity?: number
  voteCount?: number
  video?: boolean
  voteAverage?: number
}

export type MoviePopular = {
  page: number
  results: Movie[]
  totalResults: number
  totalPages: number
}
