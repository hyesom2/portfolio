import styles from "@/components/Carousel/Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface CarouselTypes {
  mainImage: string;
  images: string[];
}

function Carousel({ mainImage, images }: CarouselTypes) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: null,
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      <div className={styles["image-wrapper"]}>
        <img src={mainImage} alt="" />
      </div>
      {
        images.map((image, index) => (
          <div className={styles["image-wrapper"]} key={index}>
            <img src={image} alt="" />
          </div>
        ))
      }
    </Slider>
  )
}

export default Carousel;