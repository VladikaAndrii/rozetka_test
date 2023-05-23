import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout
