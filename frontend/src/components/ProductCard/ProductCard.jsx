import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import styles from "./ProductCard.module.scss"
import { MdAddShoppingCart } from "react-icons/md"
import { addItem } from "../../features/basketSlice"

const ProductCard = ({ product }) => {
  const { title, images, price, id } = product
  const dispatch = useDispatch()


  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addItem(product))
  }

  return (
    <>
    <Link to={`products/${id}`} className={styles.card}>
      <img src={images[0].image} className={styles.image} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>{price}₴</p>
        </div>
        <div className={styles.iconContainer} onClick={handleAdd}>
          <MdAddShoppingCart className={styles.icon} />
          <p>Додати до кошика</p>
        </div>
      </div>
    </Link>
    </>
  )
}

export default ProductCard
