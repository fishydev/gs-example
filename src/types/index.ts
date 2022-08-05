export enum MediaType {
  TV = "tv",
  Movie = "movie",
}

export type PagedResult = {
  page: number
  total_results: number
  total_pages: number
}
