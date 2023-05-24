import styles from "./SearchButton.module.scss"

const SearchButton = ({ handleSearch }) => {
  return (
    <div className={styles.button} onClick={handleSearch}>
      <p className={styles.text}>Search</p>
    </div>
  )
}

export default SearchButton
