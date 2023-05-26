import { useState, useEffect } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { validationEmail, validationPhone } from "../../utilits/validations";
import styles from "./AuthForm.module.scss";

const Authform = () => {
  const [login, setLogin] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isDisBtn, setIsDisBtn] = useState(true);
  const [isRemember, setIsRemember] = useState(false);

  const names = {
    login: "login",
    password: "password",
  };

  useEffect(() => {
    if (login.length > 0 && password.length > 5 && (isEmail || isPhone)) {
      setIsDisBtn(false);
    } else {
      setIsDisBtn(true);
    }
  }, [login, password, isEmail, isPhone]);

  const checkTypeValueError = (e) => {
    const name = e.target.name;
    if (name === names.login) {
      setIsEmail(false);
      setIsPhone(false);
      if (validationEmail(login)) {
        setIsEmail(true);
        return;
      }
      if (validationPhone(login)) {
        setIsPhone(true);
        return;
      }
    }
    if (name === names.password) {
      if (password.length === 0) {
        return;
      }
      if (password.length > 0 && password.length < 6) {
        console.log(password.length)
        setIsPassword(false);
        return;
      }
      if (password.length >= 6) {
        setIsPassword(true);
      }
    }
  };

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
      <div className={styles.containerInput} onBlur={checkTypeValueError}>
        {!isEmail && !isPhone ? (
          <p className={styles.error}>Не корректна пошта або номер телефону</p>
        ) : <p className={styles.explanation}>Номер телефону повинен починатись з "+"</p>}
        <CustomInput
          type={"text"}
          name={names.login}
          value={login}
          handleChange={handleChange}
          placeholder={"Ел. пошта або телефон"}
          className={styles.input}
        />
      </div>
      <div className={styles.containerInput} onBlur={checkTypeValueError}>
        {!isPassword && (
          <p className={styles.error}>
            Пароль має містити не меншe 6-ти символів
          </p>
        )}
        <CustomInput
          type={"password"}
          name={names.password}
          value={password}
          handleChange={handleChange}
          placeholder={"Пароль"}
          isPassword={true}
          className={styles.input + " " + styles.inputEdited}
        />
      </div>
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
