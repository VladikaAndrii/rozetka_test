import { AiOutlineSearch } from "react-icons/ai"
import SearchButton from "../SearchButton/SearchButton"
import styles from "./SearchBar.module.scss"

const SearchBar = ({ value, setValue }) => {
  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const handleSearch = () => {
    // product.filter((item) => item.title.includes(value))
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
