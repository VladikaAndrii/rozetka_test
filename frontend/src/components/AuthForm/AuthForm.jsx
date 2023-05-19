import { useState, useEffect } from "react";
import CustomInput from "../CustomInput/CustomInput";
import styles from "./AuthForm.module.scss";

const Authform = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isDisBtn, setIsDisBtn] = useState(true);
  const [isRemember, setIsRemember] = useState(false);

  const names = {
    login: "login",
    password: "password",
  };

  useEffect(() => {
    if (login.length > 0 && password.length > 0) {
      setIsDisBtn(false);
    } else {
      setIsDisBtn(true);
    }
  }, [login, password]);

  const handleChange = (e) => {
    const name = e.target.name;
    name === names.login && setLogin(e.target.value);
    name === names.password && setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Auth");
    statesReset(setLogin, setPassword);
  };

  const hendleRemember = (e) => {
    setIsRemember(isRemember ? false : true);
  };

  const statesReset = (...setStates) => {
    setStates.forEach((setState) => {
      setState("");
    }, []);
  };

  return (
    <>
      <CustomInput
        type={"text"}
        name={names.login}
        value={login}
        handleChange={handleChange}
        placeholder={"Ел. пошта або телефон"}
        className={styles.input}
      />
      <CustomInput
        type={"password"}
        name={names.password}
        value={password}
        handleChange={handleChange}
        placeholder={"Пароль"}
        isPassword={true}
        className={styles.input + " " + styles.inputEdited}
      />
      <div className={styles.rememberBlock}>
        <div className={styles.checkboxLabel}>
          <input
            id="checkbox"
            type="checkbox"
            className={styles.checkbox}
            onClick={hendleRemember}
          />
          <p className={styles.checkboxTitle} onClick={hendleRemember}>
            Запам’ятати
          </p>
        </div>
        <p className={styles.remember}>Забув пароль</p>
      </div>
      <button
        type="submit"
        disabled={isDisBtn}
        className={styles.btnSubmit}
        onClick={handleSubmit}
      >
        Увійти
      </button>
    </>
  );
};
export default Authform;
