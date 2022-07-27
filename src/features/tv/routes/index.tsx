import { Route, Routes } from "react-router-dom"

import { TvDetail } from "./TvDetail"
import { TvPopular } from "./TvPopular"

export const TvRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<TvPopular />} />
      <Route path="/:tvId" element={<TvDetail />} />
    </Routes>
  )
}
