import styles from "./ProductCheckoutRow.module.scss"

const ProductCheckoutRow = ({ product }) => {
  const { title, quantity, images, price } = product
  return (
    <div className={styles.container}>
      <img className={styles.image} src={images[0].image} alt={title} />
      <span className={styles.title}>{title}</span>
      <div className={styles.block}>
        <span className={styles.text}>Ціна</span>
        <span className={styles.text}>{price}₴</span>
      </div>
      <div className={styles.block}>
        <span className={styles.text}>Кількість</span>
        <span className={styles.text}>{quantity}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.text}>Сума</span>
        <span className={styles.text}>{price * quantity}₴</span>
      </div>
    </div>
  )
}

export default ProductCheckoutRow
