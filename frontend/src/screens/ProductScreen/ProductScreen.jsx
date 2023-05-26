import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/basketSlice";
import useAxios from "../../hooks/useFetch";
import styles from "./ProductScreen.module.scss";


const ProductScreen = () => {
  const { id } = useParams()
  const [index, setIndex] = useState(0);
  const [activeNav, setActiveNav] = useState(1);
  const {data} = useAxios({url: `http://ec2-13-48-28-211.eu-north-1.compute.amazonaws.com/api/productsproduct/${id}/`})
  const dispatch = useDispatch();

  const handleSwitchItem = (e) => {
    const idx = Number(e.target.dataset.idx);
    const name = e.target.name;

    name === "image" ? setIndex(idx) : setActiveNav(idx);
  };

  const handleClick = () => {
    dispatch(addItem(data));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data?.title}</h1>
      <div className={styles.productBaseInfoContainer}>
        <div className={styles.productBaseImagescontainer}>
          <img
            src={`http://ec2-13-48-28-211.eu-north-1.compute.amazonaws.com${data?.images[index].image}`}
            className={styles.productImg}
            alt="img"
          />
          <ul className={styles.productImagesList}>
            {data?.images.map(({id, image }, idx) => {
              return (
                <li
                  key={id}
                  onClick={handleSwitchItem}
                  className={styles.productImagesListItem}
                >
                  <img
                    src={`http://ec2-13-48-28-211.eu-north-1.compute.amazonaws.com${image}`}
                    name="image"
                    data-idx={idx}
                    className={
                      styles.productImgMin +
                      " " +
                      (id === index && styles.productImgMinActive)
                    }
                    alt="img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.productBaseBuyingContainer}>
          <div className={styles.productBuyingBlock}>
            <p className={styles.buyngTitle}>
              Продавець:<span>e-store</span>
            </p>
            <div className={styles.buyngBlock}>
              <div className={styles.priceAvailability}>
                <p className={styles.price}>{data?.price} ГРН</p>
                <p className={styles.availability}>Е в наявності</p>
              </div>
              <button className={styles.btnBuy} onClick={handleClick}>Купити</button>
              <div className={styles.funcIcons}>
                <img
                  src="images/funcIconOne.png"
                  className={styles.funcIcon}
                  alt=""
                ></img>
                <img
                  src="images/funcIconTwo.png"
                  className={styles.funcIcon}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.productDeliveryInfoBlock}>
            <p className={styles.deliveryTitle}>Доставка</p>
            <div className={styles.deliveryAgentsBlock}>
              <div className={styles.deliveryAgents}>
                <p className={styles.deliveryAgent}>
                  Самовивіз із точок видачі<span>e-store</span>
                </p>
                <p className={styles.toMap}>На мапі</p>
                <p className={styles.deliveryAgent}>
                  Самовивіз із відділень пошти
                </p>
                <p className={styles.toMap}>На мапі</p>
                <p className={styles.deliveryAgent}>Доставка кур’єром</p>
              </div>
              <div className={styles.delivarySendings}>
                <p className={styles.sending}>Забрати з 25 травня з 14:00</p>
                <p className={styles.sending}>Відправимо завтра</p>
                <p className={styles.sending}>Відправимо завтра</p>
              </div>
              <div className={styles.productPaymentInfoBlock}>
                <p className={styles.payment + " " + styles.paymentEstore}>
                  Безкоштовно
                </p>
                <p className={styles.payment}>38 грн - 89 грн </p>
                <p className={styles.payment}>38 грн - 89 грн </p>
              </div>
            </div>
          </div>
          <div className={styles.delivaryPaymentWarantyBlock}>
            <p className={styles.paymentInfo}>
              <span>Оплата.</span> карткою у відділенні, Оплата при отриманні
              товару, -5% знижки
              <br /> при оплаті від 500 грн. фізичних осіб, Mastercard, Visa,
              Сплатити онлайн карткою
              <br /> "єПідтримка", Apple Pay, PrivatPay
            </p>
            <p className={styles.warantyInfo}>
              Гарантія. Обмін/повернення товару протягом 14 днів
            </p>
          </div>
        </div>
      </div>
      <div className={styles.subNavBlock}>
        <ul className={styles.subNavList}>
          <li
            name="subNav"
            data-idx="1"
            className={
              styles.subNavListItem +
              " " +
              (1 === activeNav && styles.activeSubNav)
            }
            onClick={handleSwitchItem}
          >
            Все про товар
          </li>
          <li
            name="subNav"
            data-idx="2"
            className={
              styles.subNavListItem +
              " " +
              (2 === activeNav && styles.activeSubNav)
            }
            onClick={handleSwitchItem}
          >
            Характеристики
          </li>
          <li
            name="subNav"
            data-idx="3"
            className={
              styles.subNavListItem +
              " " +
              (3 === activeNav && styles.activeSubNav)
            }
            onClick={handleSwitchItem}
          >
            Відгуки
          </li>
          <li
            name="subNav"
            data-idx="4"
            className={
              styles.subNavListItem +
              " " +
              (4 === activeNav && styles.activeSubNav)
            }
            onClick={handleSwitchItem}
          >
            Фото
          </li>
          <li
            name="subNav"
            data-idx="5"
            className={
              styles.subNavListItem +
              " " +
              (5 === activeNav && styles.activeSubNav)
            }
            onClick={handleSwitchItem}
          >
            Питання
          </li>
        </ul>
      </div>
      <div className={styles.productDiscriptionBlock}>
        <div className={styles.productDiscription}>
          <h1 className={styles.discriptionTitle}>Опис {data?.title}</h1>
          <p className={styles.description}>
            Міцна та надійна сумка українського виробництва від TM {data?.brand}.
            Сумка виготовлена з міцного водовідштовхувального матеріалу стійкого
            до забруднення та пошкоджень. Складається з основного відділення та
            зовнішньої кишені на блискавці спереду. З боків розташовані невеликі
            кишені на липучці. Спереду є нашивка зі світловідбиваючого
            матеріалу. Є знімний регульований плечовий ремінь. Ручки для
            перенесення в руках та плечовий ремінь додатково укріплені для
            надання їм додаткової міцності.
          </p>
          <h2 className={styles.characteristicsTitle}>
            Характеристика <span>Сумки Wallaby</span>
          </h2>
          <div className={styles.characteristicsList}>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Колір</p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>Бордовий</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Матеріал </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>Текстиль</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Склад </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>100% текстилю</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Застібка </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>Молнія</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Розмір </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>45 смм х 22 см х 20 см</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Україна </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>Бордовий</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Реєстрація </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>Україна</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Гарантія </p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>Бордовий</p>
              </div>
            </div>
            <div className={styles.characteristicsItem}>
              <p className={styles.characteristicsName}>Колір</p>
              <div className={styles.line}></div>
              <div className={styles.characteristicsWrap}>
                <p className={styles.characteristics}>12 місяців</p>
              </div>
            </div>
          </div>
          <div className={styles.allCharacteristics}>
              <p className={styles.allCharacteristicsText}>Дивитись всі характеристики </p>
              <img className={styles.allCharacteristicsImg} src="images/Arrow.png" alt=""/>
           </div>
        </div>
        <div className={styles.writeFeedback}>
          <button className={styles.btnFeedback}>Написати відгук</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
