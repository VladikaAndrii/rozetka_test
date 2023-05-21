import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.css";

const CarouselSwiper = () => {
  const images = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2023/05/15/14/20/museum-7995207_960_720.jpg",
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2023/04/23/16/14/station-7946105_960_720.jpg",
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/photo/2023/05/17/20/12/mannheim-8000972_960_720.jpg",
    },
  ];

  return (
    <div className={styles.container}>
    <Carousel
      controls="false"
      prevIcon={
        <div className={styles.iconBlock}>
        <img
          className={styles.prevIcon}
          src="images/prevIcon.png"
          alt="prevIcon"
        />
       </div>
      }
      nextIcon={
        <div className={styles.iconBlock}>
            <img
              className={styles.nextIcon}
              src="images/nextIcon.png"
              alt="nextIcon"
            />
        </div>
      }
    >
      {images.map((image) => {
        return (
          <Carousel.Item key={image.id} className={styles.listItem}>
            <img className="d-block w-100" src={image.url} alt="img" />
          </Carousel.Item>
        );
      })}
    </Carousel>
    </div>
  );
};

export default CarouselSwiper;
