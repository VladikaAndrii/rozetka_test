import { useState, useEffect } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { validationEmail, validationPhone } from "../../utilits/validations";
import styles from "./RegistrationForm.module.scss";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [isFirstName, setIsFirstName] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isLastName, setIsLastName] = useState(true);
  const [phone, setPhone] = useState("");
  const [isPhone, setIsPhone] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isDisBtn, setIsDisBtn] = useState(true);

  const names = {
    firstName: "firstName",
    lastName: "lastName",
    phone: "phone",
    email: "email",
    password: "password",
  };

  useEffect(() => {
    if (
      firstName.length > 3 &&
      lastName.length > 3 &&
      email.length > 0 &&
      password.length > 5 &&
      phone.length > 0 &&
      isEmail &&
      isPhone
    ) {
      setIsDisBtn(false);
    } else {
      setIsDisBtn(true);
    }
  }, [firstName, lastName, phone, email, password, isEmail, isPhone]);

  const checkTypeValueError = (e) => {
    const name = e.target.name;
    if (name === names.firstName) {
      setIsFirstName(false);
      if (firstName.length === 0) {
        setIsFirstName(true);
        return;
      }
      if (firstName.length > 0 && firstName.length < 3) {
        setIsFirstName(false);
        return;
      }
      if (firstName.length >= 3) {
        setIsFirstName(true);
        return;
      }
    }
    if (name === names.lastName) {
      setIsLastName(false);
      if (lastName.length === 0) {
        setIsLastName(true);
        return;
      }
      if (lastName.length > 0 && lastName.length < 3) {
        setIsLastName(false);
        return;
      }
      if (lastName.length >= 3) {
        setIsLastName(true);
        return;
      }
    }
    if (name === names.email) {
      setIsEmail(false);
      if (email.length === 0) {
        setIsEmail(true);
        return;
      }
      if (validationEmail(email)) {
        setIsEmail(true);
        return;
      }
    }
    if (name === names.phone) {
      setIsPhone(false);
      if (phone.length === 0) {
        setIsPhone(true);
        return;
      }
      if (validationPhone(phone)) {
        setIsPhone(true);
        return;
      }
    }
    if (name === names.password) {
      setIsPassword(false);
      if (password.length === 0) {
        setIsPassword(true);
        return;
      }
      if (password.length > 0 && password.length < 6) {
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
    name === names.firstName && setFirstName(e.target.value);
    name === names.lastName && setLastName(e.target.value);
    name === names.phone && setPhone(e.target.value);
    name === names.email && setEmail(e.target.value);
    name === names.password && setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Auth");
    statesReset(setFirstName, setLastName, setEmail, setPassword, setPhone);
  };

  const statesReset = (...setStates) => {
    setStates.forEach((setState) => {
      setState("");
    });
  };

  return (
    <>
      <div className={styles.containerInput} onBlur={checkTypeValueError}>
        {!isFirstName && (
          <p className={styles.error}>Ім'я має містити не менше 3-х символів</p>
        )}
        <CustomInput
          type={"text"}
          name={names.firstName}
          value={firstName}
          handleChange={handleChange}
          placeholder={"Ім’я"}
          className={styles.input}
        />
      </div>
      <div className={styles.containerInput} onBlur={checkTypeValueError}>
        {!isLastName && (
          <p className={styles.error}>
            Прізвище має містити не менше 3-х символів
          </p>
        )}
        <CustomInput
          type={"text"}
          name={names.lastName}
          value={lastName}
          handleChange={handleChange}
          placeholder={"Прізвище"}
          className={styles.input}
        />
      </div>
      <div className={styles.containerInput} onBlur={checkTypeValueError}>
        {!isPhone ? <p className={styles.error}>Некорректний номер</p> : <p className={styles.explanation}>Номер телефону повинен починатись з "+"</p>}
        <CustomInput
          type={"tel"}
          name={names.phone}
          value={phone}
          handleChange={handleChange}
          placeholder={"Телефон"}
          className={styles.input}
        />
      </div>
      <div className={styles.containerInput} onBlur={checkTypeValueError}>
        {!isEmail && <p className={styles.error}>Некорректна пошта</p>}
        <CustomInput
          type={"email"}
          name={names.email}
          value={email}
          handleChange={handleChange}
          placeholder={"Ел. пошта"}
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
          className={styles.input}
        />
      </div>
      <p className={styles.conditions}>
        Реєструючись, ви погоджуєтесь з умовами{" "}
        <span className={styles.conditionsLink}>
          положення про зборі та захисті персональних даних
        </span>{" "}
        та{" "}
        <span className={styles.conditionsLink}>користувальницькою угодою</span>
      </p>
      <button
        disabled={isDisBtn}
        className={styles.btnSubmit}
        type="submit"
        onClick={handleSubmit}
      >
        Зареєструватись
      </button>
    </>
  );
};
export default RegistrationForm;
