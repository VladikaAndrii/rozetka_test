import { useState, useEffect } from "react";
import CustomInput from "../CustomInput/CustomInput";
import styles from "./RegistrationForm.module.scss";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
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
      firstName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      phone.length > 0
    ) {
      setIsDisBtn(false);
    } else {
      setIsDisBtn(true);
    }
  }, [firstName, lastName, phone, email, password]);

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
      <CustomInput
        type={"text"}
        name={names.firstName}
        value={firstName}
        handleChange={handleChange}
        placeholder={"Ім’я"}
        className={styles.input}
      />
      <CustomInput
        type={"text"}
        name={names.lastName}
        value={lastName}
        handleChange={handleChange}
        placeholder={"Прізвище"}
        className={styles.input}
      />
      <CustomInput
        type={"tel"}
        name={names.phone}
        value={phone}
        handleChange={handleChange}
        placeholder={"Телефон"}
        className={styles.input}
      />
      <CustomInput
        type={"email"}
        name={names.email}
        value={email}
        handleChange={handleChange}
        placeholder={"Ел. пошта"}
        className={styles.input}
      />
      <CustomInput
        type={"password"}
        name={names.password}
        value={password}
        handleChange={handleChange}
        placeholder={"Пароль"}
        isPassword={true}
        className={styles.input}
      />
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
