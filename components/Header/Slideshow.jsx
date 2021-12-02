import * as React from "react";
import styles from "../../styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgArray from "./bannerImages";

const SlideShow = () => (
  <div className={styles.carouselContainer}>
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showIndicators={true}
      showThumbs={false}
      showStatus={false}
      interval="7000"
    >
      {imgArray.map((image) => (
        <img src={image} />
      ))}
    </Carousel>
  </div>
);

export default SlideShow;
