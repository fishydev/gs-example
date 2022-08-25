import _ from "lodash"
import { Card } from "../Elements/Card"

const CardContentPlaceholder = () => {
  return (
    <div>
      <div className="w-full bg-black drop-shadow-md rounded-sm">
        <div className="animate-pulse w-full aspect-[2/3] bg-rose-900 rounded-t-sm"></div>
        <div className="mt-3 space-y-4">
          <div className="animate-pulse w-2/3 h-6 bg-rose-900 rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}

export const generateCardPlaceholders = (amount: number) => {
  let dummy = [] as JSX.Element[]
  _.times(amount, (i) => {
    dummy.push(
      <Card key={i}>
        <CardContentPlaceholder />
      </Card>
    )
  })
  return dummy
}
