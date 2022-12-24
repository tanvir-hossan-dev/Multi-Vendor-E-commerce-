import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[94%] mx-auto">
      <Slider {...settings}>
        <div className="w-screen">
          <img className=" w-screen h-[500px]" src={banner1} alt="img-1" />
        </div>
        <div className="w-screen">
          <img className=" w-screen h-[500px]" src={banner2} alt="img-2" />
        </div>
        <div className="w-screen">
          <img className=" w-screen h-[500px]" src={banner3} alt="img-3" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
