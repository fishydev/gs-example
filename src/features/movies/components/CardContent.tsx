import { formatDate } from "@/utils/format"

import { RoundedProgressBar } from "@/components/Elements/RoundedProgressBar"

type MovieCardContentProps = {
  poster_path: string | null
  vote_average: number
  title?: string
  name?: string
  release_date?: string
  first_air_date?: string
}

export const CardContent = (props: MovieCardContentProps) => {
  const {
    poster_path,
    vote_average,
    title,
    release_date,
    name,
    first_air_date,
  } = props
  return (
    <div className="flex-col h-[325px] w-[150px]">
      <div
        className="h-[225px] w-[150px] rounded-t-lg relative bg-contain"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w500/${poster_path})`,
        }}
      >
        {/* <div className="h-[225px] w-[150px] rounded-lg relative"> */}
        <div className="w-8 h-8 absolute bottom-3 right-3">
          <RoundedProgressBar value={Math.floor(vote_average * 10)} />
        </div>
      </div>
      <div className="p-2">
        <p className="text-sm font-bold">{title ? title : name}</p>
        <p className="text-sm">
          {formatDate(
            release_date
              ? (release_date as string)
              : (first_air_date as string),
            "YYYY-MM-DD",
            "DD MMMM YYYY"
          )}
        </p>
      </div>
    </div>
  )
}
