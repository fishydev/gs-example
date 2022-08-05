export type People = {
  birthday?: string
  known_for_department: string
  deathday?: string
  id: number
  name: string
  also_known_as: string[]
  gender: number
  biography: string
  popularity: number
  place_of_birth: string
  profile_path: string
  adult: boolean
  imdb_id: string
  homepage?: string
}

export type Cast = {
  adult: boolean
  gender?: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}
