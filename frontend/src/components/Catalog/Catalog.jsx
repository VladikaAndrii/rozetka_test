import { useEffect, useState } from "react"
import styles from "./Catalog.module.scss"
import { TbTriangleSquareCircle } from "react-icons/tb"
import useFetch from "../../hooks/useFetch"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Catalog = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const [categories, setCategories] = useState(null)
  const { data, error, loading } = useFetch({
    url: "http://ec2-16-16-218-11.eu-north-1.compute.amazonaws.com/api/productscategory/",
  })
  const products = useSelector((state) => state.products)

  const navigation = useNavigate()

  const handleClick = (id) => {
    const searchProducts = products.filter((product) => product.category === id)

    navigation("/products-searched", { state: { searchProducts } })
  }

  const handleLeave = () => {
    setTimeout(() => {
      setOpen(false)
      setActive(false)
    }, 250)
  }

  const handleEnter = () => {
    setOpen(true)
  }

  useEffect(() => {
    if (!data) return
    const newArray = data.reduce((acc, obj) => {
      if (obj.parent_category === null) {
        acc[obj.title] = []
      } else {
        const parentTitle = data.find(
          (item) => item.id === obj.parent_category
        )?.title
        if (parentTitle) {
          acc[parentTitle].push(obj)
        }
      }
      return acc
    }, {})
    setCategories(newArray)
  }, [data])

  return (
    <div
      className={styles.container}
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
    >
      <TbTriangleSquareCircle className={styles.icon} />
      <p className={styles.text}>Каталог</p>

      {open ? (
        <div
          className={styles.modal}
          onMouseOver={handleEnter}
          onMouseLeave={handleLeave}
        >
          {Object.entries(categories)?.map(([key, value]) => (
            <div key={key}>
              <p
                className={
                  active ? `${styles.key} ${styles.active}` : styles.key
                }
                onClick={() => setActive(!active)}
              >
                {key}
              </p>
              {active ? (
                <div className={styles.values}>
                  {value.map((item) => (
                    <p
                      key={item.id}
                      className={styles.value}
                      onClick={() => handleClick(item.id)}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div>
            <p className={`${styles.key} ${styles.disabled}`}>Смартфони</p>
            <p className={`${styles.key} ${styles.disabled}`}>
              Побутова техніка
            </p>
            <p className={`${styles.key} ${styles.disabled}`}>Ноутбуки</p>
            <p className={`${styles.key} ${styles.disabled}`}>Спорт</p>
            <p className={`${styles.key} ${styles.disabled}`}>Одяг</p>
            <p className={`${styles.key} ${styles.disabled}`}>
              Краса та здоров’я
            </p>
            <p className={`${styles.key} ${styles.disabled}`}>Дитячі товари</p>
            <p className={`${styles.key} ${styles.disabled}`}>Зоотовари</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Catalog
