import { RiDeleteBinLine } from "react-icons/ri"
import styles from "./ProductRow.module.scss"
import { useDispatch } from "react-redux"
import { addItem, clearItem, removeItem } from "../../features/basketSlice"

const ProductRow = ({ product }) => {
  const { title, price, images, quantity } = product
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addItem(product))
  }

  const handleRemove = () => {
    dispatch(removeItem(product))
  }

  const handleClearItem = () => {
    dispatch(clearItem(product))
  }

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${images[0].image})` }}
        className={styles.image}
      />
      <div className={styles.subContainer}>
        <div className={styles.block}>
          <p className={styles.title}>{title}</p>
          <div className={styles.iconContainer} onClick={handleClearItem}>
            <RiDeleteBinLine className={styles.icon} />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.actions}>
            <div className={styles.action} onClick={handleRemove}>
              -
            </div>
            <div className={styles.input}>{quantity}</div>
            <div className={styles.action} onClick={handleAdd}>
              +
            </div>
          </div>
          <p>
            {quantity} x {price} ₴
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductRow
