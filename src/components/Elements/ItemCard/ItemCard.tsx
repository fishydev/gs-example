import { RoundedProgressBar } from "@/components/Elements/RoundedProgressBar"

type ItemCardProps = {
  title: string
  date: string
  rating: number
  image: string
}

export const ItemCard = (props: ItemCardProps) => {
  return (
    <div className="flex-col h-[300px] w-[150px]">
      <div
        className="h-[225px] w-[150px] rounded-sm relative"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="w-8 h-8 absolute bottom-3 right-3">
          <RoundedProgressBar value={props.rating} />
        </div>
      </div>
      <p className="text-md">{props.title}</p>
      <p className="text-md">{props.date}</p>
    </div>
  )
}
