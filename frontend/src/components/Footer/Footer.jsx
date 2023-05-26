import styles from "./Footer.module.scss"
import { Logo } from "../../assets/logo"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import telegram from "../../assets/telegram.png"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.icon}>
          <Logo />
        </div>
        <div className={styles.socials}>
          <a href="http://web.telegram.org/" target="_blank">
            <img src={telegram} alt="telegram" />
          </a>

          <a href="http://facebook.com" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>

          <a href="http://instagram.com" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <p>Інформація</p>
          <p>Про нас</p>
          <p
            style={{
              width: "150px",
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            Умови користування
          </p>
          <p>Контакти</p>
        </div>
        <div className={styles.column}>
          <p>Допомога</p>
          <p>Доставка і оплата</p>
          <p>Гарантія</p>
          <p>Повернення товару</p>
          <p>Сервісні центри</p>
        </div>
        <div className={styles.column}>
          <p>Сервіси</p>
          <p>Сертифікати</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
