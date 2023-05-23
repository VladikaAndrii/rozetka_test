import { useSelector } from "react-redux"
import Carousel from "../../components/Caroules/Carousel"
import ProductCard from "../../components/ProductCard/ProductCard"
import styles from "./HomeScreen.module.scss"
import { PlayMarket } from "../../assets/logo"
import { BsApple } from "react-icons/bs"

const HomeScreen = () => {
  const products = useSelector((state) => state.products)
  return (
    <div className={styles.screen}>
      <Carousel />

      <div className={styles.container}>
        <p className={styles.title}>Новинки</p>
        <div className={styles.products}>
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.title}>Акції</p>
        <div className={styles.products}>
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div
        className={styles.container}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          className={styles.title}
          style={{ alignSelf: "center", marginLeft: 0 }}
        >
          Завантажуй наш додаток
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <BsApple />
            App Store
          </button>
          <button className={styles.button}>
            <PlayMarket />
            Google Play
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
