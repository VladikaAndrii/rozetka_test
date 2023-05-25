import { useSelector } from "react-redux"
import styles from "./Checkout.module.scss"
import { useState } from "react"
import ProductCheckoutRow from "../../components/ProductCheckoutRow/ProductCheckoutRow"
import CustomInput from "../../components/CustomInput/CustomInput"

const Checkout = () => {
  const basket = useSelector((state) => state.basket)
  const [deliveryCost, setDeliveryCost] = useState("безкоштовно")
  const [pay, setPay] = useState(null)
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
  })
  const allInputs = Object.values(inputs).every((value) => value !== "")

  const initialReduce = deliveryCost !== "безкоштовно" ? deliveryCost : 0

  const changeDelivery = (e) => {
    const { value } = e.target
    setDeliveryCost(value)
  }

  const changePay = (e) => {
    const { value } = e.target
    setPay(value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  return (
    <div className={styles.screen}>
      <div className={styles.block}>
        <p className={styles.title}>Оформлення замовлення</p>
        <div className={styles.point}>
          <div className={styles.circle}>1</div>
          <p className={styles.pointText}>Ваші контактні дані</p>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.form}>
            <CustomInput
              type={"text"}
              name={"name"}
              value={inputs.name}
              handleChange={handleChange}
              placeholder={"Ім'я"}
            />
            <CustomInput
              type={"text"}
              name={"surname"}
              value={inputs.surname}
              handleChange={handleChange}
              placeholder={"Прізвище"}
            />
            <CustomInput
              type={"email"}
              name={"email"}
              value={inputs.email}
              handleChange={handleChange}
              placeholder={"Ел. пошта"}
            />
            <CustomInput
              type={"tel"}
              name={"phone"}
              value={inputs.phone}
              handleChange={handleChange}
              placeholder={"Телефон"}
            />
            <CustomInput
              type={"text"}
              name={"address"}
              value={inputs.address}
              handleChange={handleChange}
              placeholder={"Адреса"}
              className={styles.gridFull}
            />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.title}>Разом</p>
            <div className={styles.row}>
              <p>
                {basket.length === 1
                  ? "1 товар на суму"
                  : `${basket.length} товарів на суму`}
              </p>
              <p>
                {basket.reduce(
                  (acc, { price, quantity }) => acc + price * quantity,
                  0
                )}
                ₴
              </p>
            </div>
            <div className={styles.row}>
              <p>Вартість доставки</p>
              <p
                style={
                  deliveryCost === "безкоштовно"
                    ? { color: "#3BAC06" }
                    : { color: "#000" }
                }
              >
                {deliveryCost}
              </p>
            </div>
            <div className={styles.row}>
              <p>До сплати</p>
              <p>
                {basket.reduce(
                  (acc, { price, quantity }) => acc + price * quantity,
                  initialReduce
                )}
                ₴
              </p>
            </div>
            <button
              type="submit"
              className={styles.button}
              disabled={!allInputs}
            >
              Підтверджую замовлення
            </button>
            <p>Підтверджуючи замовлення, я приймаю умови:</p>
            <ul>
              <li>
                <a href="" target="_blank" className={styles.bullet}>
                  {" "}
                  Положення про збирання та захист персональних даних{" "}
                </a>
              </li>
              <li>
                <a href="" target="_blank" className={styles.bullet}>
                  Користувальницької угоди
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Замовлення</p>
        <div className={styles.gridContainer}>
          <div className={styles.container}>
            <div className={styles.point}>
              <div className={styles.circle}>1</div>
              <p className={styles.pointText}>Товар</p>
            </div>
            {basket.map((item) => (
              <ProductCheckoutRow key={item.id} product={item} />
            ))}
          </div>

          <div className={styles.container}>
            <div className={styles.point}>
              <div className={styles.circle}>2</div>
              <p className={styles.pointText}>Доставка</p>
            </div>
            <div className={styles.radios}>
              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="delivery1"
                  name="delivery"
                  value="безкоштовно"
                  onChange={changeDelivery}
                />
                <label htmlFor="delivery1">Самовивіз із наших магазинів</label>
                <label
                  style={{ marginLeft: "auto", color: "#3BAC06" }}
                  htmlFor="delivery1"
                >
                  безкоштовно
                </label>
              </div>

              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="delivery2"
                  name="delivery"
                  value="100"
                  onChange={changeDelivery}
                />
                <label htmlFor="delivery2">Кур'єр на вашу адресу</label>
                <label style={{ marginLeft: "auto" }} htmlFor="delivery2">
                  100₴
                </label>
              </div>

              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="delivery3"
                  name="delivery"
                  value="60"
                  onChange={changeDelivery}
                />
                <label htmlFor="delivery3">Самовивіз із Нової Пошти</label>
                <label style={{ marginLeft: "auto" }} htmlFor="delivery3">
                  60₴
                </label>
              </div>

              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="delivery4"
                  name="delivery"
                  value="45"
                  onChange={changeDelivery}
                />
                <label htmlFor="delivery4">Самовивіз з Meets</label>
                <label style={{ marginLeft: "auto" }} htmlFor="delivery4">
                  45₴
                </label>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.point}>
              <div className={styles.circle}>3</div>
              <p className={styles.pointText}>Оплата</p>
            </div>
            <div className={styles.radios}>
              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="pay1"
                  name="pay"
                  value="при отримані товара"
                  onChange={changePay}
                />
                <label htmlFor="pay1">Оплата при отримані товара</label>
              </div>

              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="pay2"
                  name="pay"
                  value="ApplePay"
                  onChange={changePay}
                />
                <label htmlFor="pay2">ApplePay</label>
              </div>

              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="pay3"
                  name="pay"
                  value="PrivatPay"
                  onChange={changePay}
                />
                <label htmlFor="pay3">PrivatPay</label>
              </div>

              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  id="pay4"
                  name="pay"
                  value="MasterCard"
                  onChange={changePay}
                />
                <label htmlFor="pay4">MasterCard</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
