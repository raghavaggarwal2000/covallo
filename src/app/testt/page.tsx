import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import { baseUrl } from "./config";

export default function Testt() {
    const baseUrl = 'https://react-slick.neostack.com/img/react-slick';
    const settings = {
        // customPaging: function(i:number) {
        //   return (
        //     <a>
        //       <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        //     </a>
        //   );
        // },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={baseUrl + "/abstract01.jpg"} />
            </div>
            <div>
              <img src={baseUrl + "/abstract02.jpg"} />
            </div>
            <div>
              <img src={baseUrl + "/abstract03.jpg"} />
            </div>
            <div>
              <img src={baseUrl + "/abstract04.jpg"} />
            </div>
          </Slider>
        </div>
      );
}
