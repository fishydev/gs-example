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
      className="bg-no-repeat bg-cover text-slate-50 h-[500px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('https://image.tmdb.org/t/p/w780${backdrop}')`,
      }}
    >
      <div className="flex backdrop-blur-md p-10 h-full items-center justify-center">
        <img
          className="rounded-sm h-[350px] mr-9"
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          alt={`${title} Poster`}
        />
        <div className="flex flex-col justify-center">
          <span className="mb-2 text-4xl font-bold">{title}</span>
          <span className="mb-4 text-md">
            {genres ? genres.map((genre) => genre.name).join(", ") : ""}
          </span>
          <div className="mb-8 flex items-center">
            <div className="mr-4 w-14">
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
