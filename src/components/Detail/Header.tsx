import { RoundedProgressBar } from "../Elements/RoundedProgressBar"

type HeaderProps = {
  title?: string
  backdrop?: string | null
  overview?: string
  popularity?: string
  poster_path?: string | null
  tagline?: string | null
  genres?: {
    name: string
    id: number
  }[]
  isLoading: boolean
}

export const Header = (props: HeaderProps) => {
  const { title, backdrop, overview, poster_path, tagline, genres, isLoading } =
    props

  if (isLoading) {
    return null
  }

  return (
    <div
      className="bg-no-repeat bg-cover text-slate-50 "
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w780${backdrop}')`,
      }}
    >
      <div className="flex backdrop-blur-md p-10">
        <img
          className="rounded-lg max-h-[450px] mr-8"
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          alt={`${title} Poster`}
        />
        <div className="flex flex-col justify-center">
          <span className="mb-2 text-4xl font-bold">{title}</span>
          <span className="mb-4 text-md">
            {genres ? genres.map((genre) => genre.name).join(", ") : ""}
          </span>
          <div className="mb-8 flex items-center">
            <div className="mr-4 w-14 h-1w-14">
              <RoundedProgressBar value={85} />
            </div>
            <span className="font-bold">User Score</span>
          </div>
          {tagline && (
            <span className="mb-4 italic text-gray-300">{tagline}</span>
          )}
          {overview && (
            <div className="flex flex-col">
              <span className="mb-2 text-2xl font-bold">Overview</span>
              <span>{overview}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
