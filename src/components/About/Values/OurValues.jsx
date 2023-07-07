import React from "react";
import Slider from "react-slick";
import styles from "./OurValues.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/Container/Container";

export default function OurValues() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id={styles.ourValues}>
      <Container>
        <h2 className={`${styles.subTitles} text-themeBlue text-center`}>
          Our Values
        </h2>
        <Slider {...settings}>
          <div className={styles.box}>
            <h3>1</h3>
          </div>
          <div className={styles.box}>
            <h3>2</h3>
          </div>
          <div className={styles.box}>
            <h3>3</h3>
          </div>
          <div className={styles.box}>
            <h3>4</h3>
          </div>
          <div className={styles.box}>
            <h3>5</h3>
          </div>
          <div className={styles.box}>
            <h3>6</h3>
          </div>
        </Slider>
      </Container>
    </section>
  );
}
