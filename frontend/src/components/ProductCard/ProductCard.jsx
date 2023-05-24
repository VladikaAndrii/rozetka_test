import { useDispatch } from "react-redux"
import styles from "./ProductCard.module.scss"
import { MdAddShoppingCart } from "react-icons/md"
import { addItem } from "../../features/basketSlice"
import { useNavigate } from "react-router"

const ProductCard = ({ product }) => {
  const { title, images, price, slug } = product
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigation(`/products/:${slug}`)
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    dispatch(addItem(product))
  }

  return (
    <div className={styles.card} onClick={handleClick}>
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
    </div>
  )
}

export default ProductCard
