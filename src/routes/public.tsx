import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { lazyImport } from "@/utils/lazyImport"
import { MainLayout } from "@/components/Layouts"

import { Rings } from "react-loader-spinner"

const { Home } = lazyImport(() => import("@/features/home"), "Home")
const { TvRoutes } = lazyImport(() => import("@/features/tv"), "TvRoutes")
const { MovieRoutes } = lazyImport(
  () => import("@/features/movies"),
  "MovieRoutes"
)

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex align-middle justify-center">
            <Rings color="#00BFFF" height={80} width={80} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/tv/*", element: <TvRoutes /> },
      { path: "/movies/*", element: <MovieRoutes /> },
    ],
  },
]
