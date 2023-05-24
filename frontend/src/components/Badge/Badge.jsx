import styles from "./Badge.module.scss"
import { useSelector } from "react-redux"

const Badge = ({ children }) => {
  const basket = useSelector((state) => state.basket)
  return (
    <div className={styles.container}>
      {children}
      {basket.length ? (
        <div className={styles.badge}>
          {basket.reduce((acc, item) => acc + item.quantity, 0)}
        </div>
      ) : null}
    </div>
  )
}

export default Badge
