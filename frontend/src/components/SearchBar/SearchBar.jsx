import { AiOutlineSearch } from "react-icons/ai"
import SearchButton from "../SearchButton/SearchButton"
import styles from "./SearchBar.module.scss"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SearchBar = ({ value, setValue }) => {
  const products = useSelector((state) => state.product)
  const navigation = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const handleSearch = () => {
    const searchProducts = products.filter((item) => item.title.includes(value))
    navigation("/productsScreen", { state: { searchProducts } })
  }

  return (
    <div className={styles.container}>
      <AiOutlineSearch className={styles.icon} />
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Я шукаю..."
        name="Пошук"
      />
      {/* microphone icon */}
      <SearchButton handleSearch={handleSearch} />
    </div>
  )
}

export default SearchBar
