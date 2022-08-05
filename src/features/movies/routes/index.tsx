import { Route, Routes } from "react-router-dom"

import { MovieDetail } from "./MovieDetail"
import { MoviePopular } from "./MoviePopular"

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<MoviePopular />} />
      <Route path="/:movieId" element={<MovieDetail />} />
    </Routes>
  )
}
