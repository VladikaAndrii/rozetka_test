import React from "react"
import styles from "./Modal.module.scss"

const Modal = ({ children, className, setOpen }) => {
  const handleClose = (e) => {
    e.stopPropagation()
    setOpen(false)
  }
  return (
    <div className={styles.background} onClick={handleClose}>
      <div className={`${styles.modal} ${`${className}` ?? ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
