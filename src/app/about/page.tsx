"use client";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import React, { useState } from 'react'

function About() {
  const paras = [
    "At Fybros, our philosophy revolves around redefining excellence in modern living. We believe that every space, be it a home, an office, or an industrial setting, has the potential to inspire, empower, and captivate. With this belief at our core, we strive to create products that go beyond the ordinary, setting new standards of quality, innovation, and design. When you choose Fybros, you choose a philosophy that resonates with your desire for excellence, innovation, and sustainability.",
    "At our core, our mission is to transform the way people interact with electrical systems. By delivering intelligent and connected solutions, we aim to revolutionize the way you experience and control your electrical devices. Through seamless integration with advanced technology, our products empower you to effortlessly manage and customize your electrical settings, enhancing convenience, efficiency, and comfort.",
    "Our vision is to lead a revolution in the electrical industry through our innovative solutions that empower our customers. We strive to challenge the status quo and push boundaries to introduce groundbreaking technologies that transform the way we interact with electricity. By providing cutting-edge products and services, we aim to inspire a new era of efficiency, sustainability, and convenience.",

  ]
  const [active, setActive] = useState(0);

  const changeParagraph = (index: number) =>{
    setActive(index);
  }
  return (
    <section className='mt-[70px]'>
      <div className='w-[100%] relative '> 
      <div className='w-[100%] h-[100%] absolute' style={{ background: "rgb(0 0 0 / 40%)"}} />

        <div className='absolute top-[50%] left-[10%]' style ={{transform: "translate(-5%, -50%)"}}>

          <h2 className='text-[16px] leading-[0] md:leading-10 md:text-[24px] lg:text-[48px] text-center'>About Us</h2>
          <p className='md:mt-[10px] text-[12px] md:text-[20px] lg:text-[28px]'>Welcome to Fybros, where we specialize in manufacturing exceptional products exclusively crafted for modern homes, offices, and industries. Our range of ultra-modern offerings includes Wires & Cables, Switchgears, Switches and Accessories, and Lighting Systems.

Philosopahy
</p>
        </div>
        <div className='w-[100%]'>
            <img src='/about_us/header.jpg' className='w-[100%] '/> 

        </div>
      </div>

      <div className='w-[100%] min-h-[100%] bg-[#272727] p-10'>
        <div className='flex sm:max-w-[540] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] flex-row justify-around mx-auto'>
          <div className='flex flex-col flex-[1]'>
            <h3 className={`${active === 0? "text-white": "text-[#767676]"} p-2 cursor-pointer`} onClick={() => changeParagraph(0)}>          
              Our Philosophy
            </h3>
            <h3 className={`${active === 1? "text-white": "text-[#767676]"} p-2 cursor-pointer`} onClick={() => changeParagraph(1)}>
              Our mission
            </h3>

            <h3 className={`${active === 2? "text-white": "text-[#767676]"} p-2 cursor-pointer`} onClick={() => changeParagraph(2)}>
              Our Vision
            
            </h3>

          </div>
          <div className='flex-[1]'>
            <p className='text-[#767676] p-2'> {paras[active]}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className='mt-7 text-center'>Certificates</h2>
        <div className='w-[100%] p-10'>
          
          <Splide 
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "1rem",
              autoplay: false,
              interval: 3000,
              rewind: true,
              perMove: 1,
              type: "loop",
              }}
              aria-label="My Favorite Images"
              
            >
            <SplideSlide>
              <img src="/about_us/certificate1.webp" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
              <img src="/about_us/certificate2.webp" alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
              <img src="/about_us/certificate3.webp" alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
              <img src="/about_us/certificate4.webp" alt="Image 2"/>
            </SplideSlide>
          </Splide>
        </div>
            {/* <Splide
              options={{
              perPage: 2.5,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "1rem",
              autoplay: false,
              interval: 3000,
              rewind: true,
              perMove: 1,
              // type: "loop",
              }}
              hasTrack={ false }
              className="carousel-wrapper">
                        <SplideTrack>
                        {message.offers.map((offer, index) => (
                          <CarouselComponent offer={offer} sendMessage={sendMessage}  index={index} language={language} />                          
                          ))}
                        <SplideSlide className="carousel"  style={{border:"0", width:"0"}}/>
                        </SplideTrack>
                        <div className="splide__arrows">
                          <button className="splide__arrow splide__arrow--prev"><img src="./image/prev.png" alt="<"/></button>
                          <button className="splide__arrow splide__arrow--next"><img src="./image/next.png" alt=">"/> </button>
                      </div>
                      </Splide> */}
      </div> 
    </section>
  )
}

export default About