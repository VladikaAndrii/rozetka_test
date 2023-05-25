import React from "react"
import styles from "./Modal.module.scss"

const Modal = ({ children, className, setOpen }) => {
  const handleClose = (e) => {
    setOpen(false)
  }

  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={styles.background} onClick={handleClose}>
      <div
        className={`${styles.modal} ${`${className}` ?? ""}`}
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
