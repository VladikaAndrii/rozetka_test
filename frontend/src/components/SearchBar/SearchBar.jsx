import SearchButton from "../SearchButton/SearchButton"
import styles from "./SearchBar.module.scss"
import { AiOutlineSearch } from "react-icons/ai"

const SearchBar = ({ value, setValue }) => {
  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const handleSearch = () => {
    // product.filter((item) => item.name.includes(value))
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
        placeholder="I am searching..."
        name="search"
      />
      {/* microphone icon */}
      <SearchButton handleSearch={handleSearch} />
    </div>
  )
}

export default SearchBar
