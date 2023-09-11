// src/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerHive from './BannerHive';
import GameJam from './GameJam';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        fade: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <></>,
        prevArrow: <></>
      };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
            <section className="header">

                <div className="header-overlay"></div>
                <section className="header-inner">

                    <BannerHive/>

                </section>
            </section>
        </div>

        <div>
            <section className="header-jam">

                <div className="header-overlay"></div>
                <section className="header-inner">

                    <GameJam/>

                </section>
            </section>

        </div>
      </Slider>
    </div>
  );
};

export default Carousel;