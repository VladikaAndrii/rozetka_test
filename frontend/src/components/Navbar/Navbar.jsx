import SearchBar from "../SearchBar/SearchBar"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import styles from "./Navbar.module.scss"
import { Logo } from "../../assets/logo"
import AuthRegModal from "../AuthRegModal/AuthRegModal"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Catalog from "../Catalog/Catalog"

const Navbar = () => {
  const [openAuth, setOpenAuth] = useState(false)
  const [openBasket, setOpenBasket] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <Catalog />
        <SearchBar />
        <div className={styles.iconContainer} onClick={() => setOpenAuth(true)}>
          <RxPerson className={styles.icon} />
        </div>
        <div className={styles.iconContainer}>
          <AiOutlineShoppingCart className={styles.icon} />
        </div>
      </nav>

      <Outlet />

      <AuthRegModal open={openAuth} setOpen={setOpenAuth} />
    </>
  )
}

export default Navbar
