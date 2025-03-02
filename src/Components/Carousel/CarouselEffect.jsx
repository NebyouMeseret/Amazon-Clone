import React from 'react'
import {images} from "./img/data"
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css"

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        emulateTouch={true}
        interval={3000}
        showStatus={false}
      >
        {images.map((img, index) => {
          return <img key={index} src={img} />;
        })}
      </Carousel>
        <div className={classes.hero__img}>

        </div>
    </div>
  );
}

export default CarouselEffect