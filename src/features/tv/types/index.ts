export type Tv = {
  posterPath: string | null
  popularity: number
  id: number
  backdropPath: string | null
  voteAverage: number
  overview: string
  firstAirDate: string
  originCountry: string[]
  genreIds: number[]
  originalLanguage: string
  voteCount: number
  name: string
  originalName: string
}

export type TvPopular = {
  page: number
  results: Tv[]
  totalResults: number
  totalPages: number
}
