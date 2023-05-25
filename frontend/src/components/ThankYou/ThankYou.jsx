import styles from "./ThankYou.module.scss"
import Background from "../../assets/Background.png"
import { useNavigate } from "react-router-dom"

const ThankYou = ({ setOpen }) => {
  const navigation = useNavigate()

  const handleClick = () => {
    setOpen(false)
    navigation("/")
  }
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={Background} />
      </div>
      <p className={styles.text}>Дякуємо за покупку</p>
      <div className={styles.button} onClick={handleClick}>
        Закрити
      </div>
    </div>
  )
}

export default ThankYou
