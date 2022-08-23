import { Banner } from "../components/Banner"
import { Popular } from "../components/Popular"
import { Trending } from "../components/Trending"

export const Home = () => {
  return (
    <div className="homepage">
      <div className="w-screen max-h-[768px]">
        <Banner />
      </div>
      <div className="max-w-[1366px] mx-auto">
        {/* <h1>Home page</h1> */}
        <Popular />
        <Trending />
      </div>
    </div>
  )
}
