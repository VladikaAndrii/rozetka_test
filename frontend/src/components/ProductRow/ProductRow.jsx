import { RiDeleteBinLine } from "react-icons/ri"
import styles from "./ProductRow.module.scss"
import { useDispatch } from "react-redux"
import {
  addItem,
  clearItem,
  removeItem,
  setQuantity,
} from "../../features/basketSlice"
import { useState } from "react"

const ProductRow = ({ product }) => {
  const { title, price, image, quantity } = product
  const [number, setNumber] = useState(quantity)
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addItem(product))
  }

  const handleRemove = () => {
    dispatch(removeItem(product))
  }

  const handleSet = (e) => {
    const { value } = e.target
    setNumber(value)
    if (value !== null) {
      dispatch(setQuantity({ product, quantity: value }))
    }
  }

  const handleRemoveItem = () => {
    dispatch(clearItem(product))
  }

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={styles.image}
      />
      <div className={styles.subContainer}>
        <div className={styles.block}>
          <p className={styles.title}>{title}</p>
          <div className={styles.iconContainer} onClick={handleRemoveItem}>
            <RiDeleteBinLine className={styles.icon} />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.actions}>
            <div className={styles.action} onClick={handleRemove}>
              -
            </div>
            <input
              className={styles.input}
              type="number"
              value={number}
              onChange={(e) => handleSet(e)}
            />
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
