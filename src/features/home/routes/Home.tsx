import { Banner } from "../components/Banner"
import { Popular } from "../components/Popular"

export const Home = () => {
  return (
    <div className="w-full">
      {/* <h1>Home page</h1> */}
      <Banner />
      <Popular />
    </div>
  )
}
