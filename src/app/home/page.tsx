import React from 'react'
import { category } from '@/lib/data'

export default function Main() {
  return (
    <section className='mt-[70px]'>
        {category.map((product: any, index: number) => (
            <div className='w-[100%] h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] p-[10px] flex items-center flex-wrap justify-center content-center' key= {index}>
                <div className='flex flex-col items-center flex-wrap justify-center content-center '>
                    {/*   font-size: 48px;
  font-weight: 300;
  line-height: 56px; */}
                    <h2 className='uppercase text-[42px] leading-[38px] md:text-[48px] font-light md:leading-[56px]'>
                        {product.homePageData.heading}
                    </h2>
                    <h3 className="font-normal text-[20px] leading-[28px] md:text-[28px] md:leading-[33px]">
                        {product.homePageData.subHeading}
                    </h3>
                </div>

                <video  autoPlay muted loop>
                    <source src= {product.video} type="video/mp4" />
                </video>
            </div>
        ))}
    </section>
  )
}
