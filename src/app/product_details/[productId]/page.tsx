"use client"
import { useParams } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Options } from '@splidejs/splide';
import { allProducts } from '@/lib/data';

function generateSlides( allImages: string[], length:number = 10 , sig = 0 ): Array<{ src: string, alt: string }> {
    // return Array.from( { length } ).map( ( value, index ) => {
    //   index = sig || index;
  
    //   return {
    //     src: `https://source.unsplash.com/random/800x450?sig=${ index }`,
    //     alt: `Image ${ index + 1 }`,
    //   };
    // } );
    return allImages.map((value, index) =>{
      return{
        src: value,
        alt: value
      }
    })
  }


function renderSlides(allImages: string[]): ReactNode[] {
    return generateSlides(allImages, allImages.length).map( slide => (
      <SplideSlide key={ slide.src }>
        <img src={ slide.src } alt={ slide.alt } loading="lazy"/>
      </SplideSlide>
    ) );
  }

function ProductDetails() {
    const { productId } = useParams<{ productId: string }>();
    const id = parseInt(productId);
    const product = allProducts[id];
    console.log('here');
    let mainRef = React.createRef<Splide>();
    let thumbsRef = React.createRef<Splide>();

    useEffect(() =>{
        if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
            mainRef.current.sync( thumbsRef.current.splide );
            }
    }, [mainRef, thumbsRef])

    // useEffect(() => {
    //   if (mainRef.current && thumbsRef.current) {
    //     mainRef.current.sync(thumbsRef.current);
    //   }
    // }, [mainRef, thumbsRef]);

    const mainOptions: Options = {
        type      : 'loop',
        perPage   : 1,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
        // height    : '20rem',
      };
  
      const thumbsOptions: Options = {
        type        : 'slide',
        rewind      : true,
        gap         : '1rem',
        pagination  : false,
        fixedWidth  : 110,
        fixedHeight : 90,
        cover       : true,
        focus       : 'center',
        isNavigation: true,
      };
  return (
        <section className='mt-[70px]'>
            <div className='w-[100%] bg-[#272727]'>
                <div className='sm:max-w-[540] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto flex flex-col md:flex-row  md:items-center md:justify-around p-10'>
                    <div className='max-w-[100%] md:max-w-[50%]'>
                        <Splide
                            options={ mainOptions }
                            // ref={ mainRef }
                            aria-labelledby="thumbnail-slider-example"
                        >
                            { renderSlides(product.allImages) }
                        </Splide>

                    <Splide
                        options={ thumbsOptions }
                        // ref={ thumbsRef }
                        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                    >
                        { renderSlides(product.allImages) }
                    </Splide>
                    </div>
                    <div>
                        right
                    </div>
                </div>
                {productId}
            </div>

        </section>
    )
}

export default ProductDetails