import { useState, useEffect } from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = (props) => {
  const [typeMode, setTypeMode] = useState("");
  const {
    type,
    name,
    value,
    handleChange,
    placeholder,
    className,
    isPassword,
  } = props;

  useEffect(() => {
    setTypeMode(type);
  }, [type]);

  const handleView = (e) => {
    e.preventDefault();
    setTypeMode(typeMode === "password" ? "text" : "password");
  };

  return (
    <div className={`${styles.inputWrapper}${` ${className}` ?? ""}`}>
      <input
        className={styles.input}
        type={typeMode}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {isPassword && (
        <button className={styles.btnView} onClick={handleView}>
          <img src="images/eye.png" alt="button view" />
        </button>
      )}
    </div>
  );
};
export default CustomInput;
