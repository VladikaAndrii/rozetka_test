import { AiOutlineSearch } from "react-icons/ai"
import SearchButton from "../SearchButton/SearchButton"
import styles from "./SearchBar.module.scss"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchBar = () => {
  const products = useSelector((state) => state.products)
  const [value, setValue] = useState("")

  const navigation = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const handleSearch = () => {
    if (!value) return
    const searchProducts = products.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    navigation("/products-searched", { state: { searchProducts } })
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
