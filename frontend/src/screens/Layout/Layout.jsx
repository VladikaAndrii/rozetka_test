import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Layout
