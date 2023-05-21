import { useState } from "react"
import Authform from "../AuthForm/AuthForm"
import RegistrationForm from "../RegistrationForm/RegistrationForm"
import styles from "./AuthRegModal.module.scss"

const AuthRegModal = ({setOpenAuth}) => {
  const [isAuthMode, setIsAuthMode] = useState(true)

  const handleSwitch = () => {
    setIsAuthMode(isAuthMode ? false : true)
  }

  return (
      <div
        className={styles.modal}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>{isAuthMode ? "Вхід" : "Реєстрація"}</h1>
          <button className={styles.closeBtn} onClick={() => setOpenAuth(false)} />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            {isAuthMode ? <Authform /> : <RegistrationForm />}
            {isAuthMode && (
              <p className={styles.registrationLink} onClick={handleSwitch}>
                Зареєструватись
              </p>
            )}
          </form>
          <div className={styles.authNetworks}>
            <h2 className={styles.authNetworksTitle}>Увійти за допомогою</h2>
            <button className={styles.btnNetwork}>
              <img src="images/facebook.png" alt="icon facebook" />
              <p className={styles.btnTitle}>Facebook</p>
            </button>
            <button className={styles.btnNetwork}>
              <img src="images/google.png" alt="icon google" />
              <p className={styles.btnTitle}>Google</p>
            </button>
          </div>
        </div>
      </div>
    // </div>
  )
}
export default AuthRegModal
