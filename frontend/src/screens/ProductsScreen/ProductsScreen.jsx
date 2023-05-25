import { useLocation } from "react-router"
import ProductCard from "../../components/ProductCard/ProductCard"
import styles from "./ProductsScreen.module.scss"

const ProductsScreen = () => {
  const location = useLocation()
  const { searchProducts } = location.state

  return (
    <div className={styles.screen}>
      <div className={styles.filters}>Filters</div>
      <div className={styles.products}>
        {searchProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsScreen
