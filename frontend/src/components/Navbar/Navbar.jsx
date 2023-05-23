import SearchBar from "../SearchBar/SearchBar"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import styles from "./Navbar.module.scss"
import { Logo } from "../../assets/logo"
import Modal from "../Modal/Modal"
import AuthRegModal from "../AuthRegModal/AuthRegModal"
import { useState } from "react"
import Catalog from "../Catalog/Catalog"
import Basket from "../Basket/Basket"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [openAuth, setOpenAuth] = useState(false)
  const [openBasket, setOpenBasket] = useState(false)

  const navigation = useNavigate()

  const handleOpenAuth = () => {
    setOpenAuth(true)
  }

  const handleOpenBasket = () => {
    setOpenBasket(true)
  }

  const handleNavigate = () => {
    navigation("/")
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoContainer} onClick={handleNavigate}>
          <Logo />
        </div>
        <Catalog />
        <SearchBar />
        <div className={styles.iconContainer} onClick={handleOpenAuth}>
          <RxPerson className={styles.icon} />
        </div>
        <div className={styles.iconContainer} onClick={handleOpenBasket}>
          <AiOutlineShoppingCart className={styles.icon} />
        </div>
      </nav>

      {openAuth && (
        <Modal setOpen={setOpenAuth}>
          <AuthRegModal setOpenAuth={setOpenAuth} />
        </Modal>
      )}
      {openBasket && (
        <Modal setOpen={setOpenBasket}>
          <Basket setOpen={setOpenBasket} />
        </Modal>
      )}
    </>
  )
}

export default Navbar
