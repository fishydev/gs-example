import { Cast } from "./Cast"
import { Header } from "./Header"

export const Detail = () => {
  return (
    <div className="w-full flex-col">
      <Header />
      <div className="max-w-7xl mx-auto flex-col">
        <Cast />
      </div>
    </div>
  )
}
