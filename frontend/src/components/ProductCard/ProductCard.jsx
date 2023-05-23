import { useDispatch } from "react-redux"
import styles from "./ProductCard.module.scss"
import { MdAddShoppingCart } from "react-icons/md"
import { addItem } from "../../features/basketSlice"

const ProductCard = ({ product }) => {
  const { title, image, price, slug } = product
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigation(`/products/:${slug}`)
  }

  const handleAdd = () => {
    dispatch(addItem(product))
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <image src={image} className={styles.image} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>{price}₴</p>
        </div>
        <div className={styles.iconContainer} onClick={handleAdd}>
          <MdAddShoppingCart className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
