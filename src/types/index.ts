export enum MediaType {
  TV = "tv",
  Movie = "movie",
}

export type PagedResult = {
  page: number
  total_results: number
  total_pages: number
}

export type Country = {
  iso_3161_1: string
  english_name: string
  native_name: string
}

export type Language = {
  iso_639_1: string
  english_name: string
  name: string
}

export type Genre = {
  id: number
  name: string
}
