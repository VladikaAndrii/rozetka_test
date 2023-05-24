import { useSelector } from "react-redux"
import styles from "./Basket.module.scss"
import { AiOutlineClose } from "react-icons/ai"
import ProductRow from "../ProductRow/ProductRow"
import { useNavigate } from "react-router-dom"

const Basket = ({ setOpen }) => {
  const basket = useSelector((state) => state.basket)
  const navigation = useNavigate()

  const handleClose = (e) => {
    e.stopPropagation()
    setOpen(false)
  }

  const handleCheckout = () => {
    navigation("/checkout")
    setOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.text}>Кошик</p>
        <div className={styles.iconContainer} onClick={handleClose}>
          <AiOutlineClose className={styles.icon} />
        </div>
      </div>
      {basket?.length ? (
        <div className={styles.products}>
          {basket.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.text}>Ваш кошик порожній...</p>
        </div>
      )}
      <div className={styles.buttons}>
        <div onClick={handleClose} className={styles.secondaryBtn}>
          Продовжити покупки
        </div>
        <div className={styles.payContainer}>
          <p className={styles.sumPrice}>
            {basket.reduce(
              (acc, { price, quantity }) => acc + price * quantity,
              0
            )}
            ₴
          </p>
          <button
            className={styles.payBtn}
            disabled={!basket?.length}
            onClick={handleCheckout}
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket
