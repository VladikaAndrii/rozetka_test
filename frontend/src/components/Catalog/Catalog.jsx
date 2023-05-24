import styles from "./Catalog.module.scss"
import { TbTriangleSquareCircle } from "react-icons/tb"

const Catalog = () => {
  return (
    <>
      <div className={styles.container}>
        <TbTriangleSquareCircle className={styles.icon} />
        <p className={styles.text}>Каталог</p>
      </div>
    </>
  )
}

export default Catalog
