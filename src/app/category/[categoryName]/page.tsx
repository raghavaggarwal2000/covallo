"use client"
import React, { useEffect, useState } from 'react'
import { category, productsList } from '@/lib/data'
import { useParams } from 'next/navigation';


function SubCategory() {
  let { categoryName }: any = useParams();
  categoryName = categoryName.replace("%20", " ");
  const product = productsList[categoryName];
  const [videoLink, setVideoLink] = useState("");
  const [subCategoryActive, setSubCategoryActive] = useState(0);

  useEffect(() => {
    const keys = Object.keys(product);
    setVideoLink(product[keys[0]].subCategoryVideo);
  }, [categoryName, product]);

  console.log(productsList[categoryName])
  return (
    <section className='mt-[70px]'>
      {/* Product {categoryName} */}
      <div className='w-[100%] h-[100vh] flex flex-wrap content-center justify-start'>
        <div className='w-[100%] h-[100%] absolute' style={{ background: "rgb(0 0 0 / 40%)"}} />
        <div className='z-10 relative p-5'>

          {
            product && (
              <h2> {categoryName} </h2>
            )
          }
          <ul>
            {
              product && Object.keys(product).map((subCategoryKey, index) =>(
                <li key = {index} className= {`mt-2 text-2xl ${subCategoryActive === index? "text-white": "text-[#6E6E6E]"}`} >
                  <h4>
                    <a href = {`/category/${categoryName}/${subCategoryKey}`} className='cursor-pointer' onMouseEnter={() => {
                        console.log("inside",product[subCategoryKey].subCategoryVideo)
                        setSubCategoryActive(index)
                        setVideoLink(product[subCategoryKey].subCategoryVideo)
                    }}>
                      {subCategoryKey}
                    </a>
                  </h4>
                </li>
              ))
            }

          </ul>
            {/* <ul>
              {product && product.map((subproduct: any , index: number) => (
                <li key = {index} className='mt-2' >
                  <h4>
                    <a className='cursor-pointer' onMouseEnter={() => {
                        console.log("inside",subproduct.subCategoryVideo)
                        setVideoLink(subproduct.subCategoryVideo)
                    }}>
                      {subproduct.subCategoryName}
                    </a>
                  </h4>
                </li>
              ))}
            </ul> */}
        </div>
        <div className='absolute top-[70px] left-0 w-[100%] h-[100%] pointer-events-none'>

          <video className='w-[100%] h-[100%] object-cover' key={videoLink}  autoPlay muted loop>
              <source src= {videoLink} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className='w-[100%] h-[20vh] bg-gray-800 flex content-center justify-center p-12'>
        <p className=''>
        Welcome to Fybros, where innovation meets tradition in our extensive selection of fans designed for every home in India. Explore our range of bladeless fans, ceiling fans, portable fans, and exhaust fans, each offering modern efficiency and timeless reliability. Whether you're enhancing your living space with the latest in bladeless technology or opting for the trusted comfort of traditional ceiling fans, Fybros provides the best fans in India to suit your style and cooling needs. Shop confidently for top-quality fans manufactured in India, ensuring durability and superior performance in every room of your home.
        </p>
      </div>
    </section>
  )
}

export default SubCategory;