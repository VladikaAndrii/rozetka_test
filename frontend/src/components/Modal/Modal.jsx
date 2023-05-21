import React from "react";
import styles from "./Modal..module.scss";

const Modal = ({children, className}) => {
    return (
        <div className={`${styles.modal}${` ${className}` ?? ""}`}>
            {children}
        </div>
    )
}

export default Modal;