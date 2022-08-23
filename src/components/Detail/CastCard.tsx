import { Card } from "@/components/Elements/Card"

type CastCardProps = {
  name: string
  character: string
  profile_path?: string
}

export const CastCard = (props: CastCardProps) => {
  const { character, name, profile_path } = props
  return (
    <Card>
      <div className="flex flex-col max-w-[150px]">
        <div
          className={`h-[225px] w-[150px] bg-contain rounded-t-sm`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w185/${profile_path})`,
          }}
        ></div>
        <div className="p-2 flex flex-col">
          <span className="text-sm font-bold">{name}</span>
          <span className="text-sm">{character}</span>
        </div>
      </div>
    </Card>
  )
}
