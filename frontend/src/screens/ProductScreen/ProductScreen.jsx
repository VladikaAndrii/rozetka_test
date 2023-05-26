import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/basketSlice";
import useAxios from "../../hooks/useFetch";
import styles from "./ProductScreen.module.scss";

const getImages = [
  {
    id: 0,
    imgPath:
      "https://cdn.pixabay.com/photo/2017/04/05/01/12/traveler-2203666_640.jpg",
  },
  {
    id: 1,
    imgPath:
      "https://cdn.pixabay.com/photo/2016/11/19/14/56/backpack-1839705_640.jpg",
  },
  {
    id: 2,
    imgPath:
      "https://media.istockphoto.com/id/1465056113/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D0%BE-%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA-%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%83%D0%B0%D1%80%D0%B8-%D1%96%D0%B7%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0%D0%BD%D1%96-%D0%BD%D0%B0-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA-%D1%80%D1%83%D1%87%D0%BD%D0%BE%D1%97-%D0%BF%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0%D1%87%D1%96-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D1%96%D0%B2.jpg?s=612x612&w=0&k=20&c=z5XObK2azIEmzEwo4ZRulALN9p18zjqCTSByQx6cThw=",
  },
  {
    id: 3,
    imgPath:
      "https://cdn.pixabay.com/photo/2018/02/20/10/59/luggage-3167359_1280.jpg",
  },
];

const ProductScreen = () => {
  const { id } = useParams()
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [activeNav, setActiveNav] = useState(1);
  const {data} = useAxios({url: `http://ec2-16-16-218-11.eu-north-1.compute.amazonaws.com/api/productsproduct/`})
  const dispatch = useDispatch();

  useEffect(() => {
    setImages(getImages);
  }, []);

  const handleSwitchItem = (e) => {
    const id = Number(e.target.dataset.id);
    const name = e.target.name;

    name === "image" ? setIndex(id) : setActiveNav(id);
  };
console.log(data);
  const handleClick = () => {
    dispatch(addItem({id:1, item: "dfsdf"}))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Сумка Wallaby</h1>
      <div className={styles.productBaseInfoContainer}>
        <div className={styles.productBaseImagescontainer}>
          <img
            src={images[index]?.imgPath}
            className={styles.productImg}
            alt="img"
          />
          <ul className={styles.productImagesList}>
            {images.map(({ id, imgPath }) => {
              return (
                <li
                  key={id}
                  onClick={handleSwitchItem}
                  className={styles.productImagesListItem}
                >
                  <img
                    src={imgPath}
                    name="image"
                    data-id={id}
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
                <p className={styles.price}>1000 ГРН</p>
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
            data-id="1"
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
            data-id="2"
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
            data-id="3"
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
            data-id="4"
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
            data-id="5"
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
          <h1 className={styles.discriptionTitle}>Опис Сумка Wallaby</h1>
          <p className={styles.description}>
            Міцна та надійна сумка українського виробництва від TM Wallaby.
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
