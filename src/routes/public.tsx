import { Outlet } from "react-router-dom"
import { lazyImport } from "@/utils/lazyImport"
import { MainLayout } from "@/components/Layouts"

const { Home } = lazyImport(() => import("@/features/home"), "Home")

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Home /> }],
  },
]
