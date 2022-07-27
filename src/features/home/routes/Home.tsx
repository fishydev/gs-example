import { Banner } from "../components/Banner"
import { Popular } from "../components/Popular"
import { Trending } from "../components/Trending"

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <h1>Home page</h1> */}
      <Banner />
      <Popular />
      <Trending />
    </div>
  )
}
