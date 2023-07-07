import React from "react";
import Slider from "react-slick";
import styles from "./OurValues.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/Container/Container";
import Image from "next/image";

export default function OurValues() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <section id={styles.ourValues}>
      <Container>
        <h2 className={`${styles.subTitles} text-themeBlue text-center`}>
          Our Values
        </h2>
        <Slider {...settings}>
          <div className={styles.slideItembox}>
            <div className={styles.boxInner}>
              <Image src='/images/components/about/icons/innovation.svg' objectFit="contain" width={125} height={112} />
              <h3 className="text-themeBlue">Innovation</h3>
            </div>
          </div>
          <div className={styles.slideItembox}>
            <div className={styles.boxInner}>
              <Image src='/images/components/about/icons/growth.svg' objectFit="contain" width={125} height={112} />
              <h3 className="text-themeBlue">Growth</h3>
            </div>
          </div>
          <div className={styles.slideItembox}>
            <div className={styles.boxInner}>
              <Image src='/images/components/about/icons/sustainability.svg' objectFit="contain" width={125} height={112} />
              <h3 className="text-themeBlue">Sustainability</h3>
            </div>
          </div>
          <div className={styles.slideItembox}>
            <div className={styles.boxInner}>
              <Image src='/images/components/about/icons/commitment.svg' objectFit="contain" width={125} height={112} />
              <h3 className="text-themeBlue">Commitment</h3>
            </div>
          </div>
          <div className={styles.slideItembox}>
            <div className={styles.boxInner}>
              <Image src='/images/components/about/icons/methodology.svg' objectFit="contain" width={125} height={112} />
              <h3 className="text-themeBlue">Methodology</h3>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
}
