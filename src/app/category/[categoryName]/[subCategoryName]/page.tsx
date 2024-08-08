"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import { productsList, allProducts } from '@/lib/data';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdOutlineArrowOutward } from 'react-icons/md';

function AllProducts() {
    let {categoryName, subCategoryName }:any = useParams();
    categoryName = categoryName.replace("%20", " ");
    subCategoryName = subCategoryName.replace("%20", " ");
    const subCategoryList = productsList[categoryName]
    const list = productsList[categoryName][subCategoryName];
    // console.log(productsList[categoryName]);
    const filterBySubCategory = (subCategory: string) => {
        return allProducts.filter(product => product.subCategory === subCategory);
    };
    
    const filteredProducts = filterBySubCategory(subCategoryName);
    console.log(filteredProducts);
  return (
    <section className='mt-[70px]'>
        {/* {categoryName} {subCategoryName} */}
        <img src={list["headerImage"]} className='w-[100%] object-fill' />

        <div className='w-[100%] min-h-[100%] bg-[#272727] px-[10px] md:px-[50px] lg:px-[80px] xl:px-[120px] py-[50px]'>
            {/* {categoryName} */}
            <div>
            <h2>  {subCategoryName} </h2>
            <p className='text-[#6E6E6E] mt-[2px]'>
                {list.description}
            </p>

            </div>



            <div className='mt-[50px]'>
                <div className="grid grid-cols-4 gap-16">
                    <div className = 'md:grid col-span-4 hidden lg:col-span-1'>
                    {/* <div className = 'grid md:grid-cols-1'> */}
                        <div>

                        
                            <h3> Category </h3>

                            <Menu as="div" className="relative inline-block text-left mt-4">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-[14px] bg-black  px-3 py-2 text-sm font-semibold text-gray-400  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                {categoryName}
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                {productsList && Object.keys(productsList).map((category, index) => (
                                    <MenuItem key = {index}>
                                        <a
                                        href= {`/category/${category}`}
                                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-800 data-[focus]:text-gray-400"
                                        key = {index} 
                                        >
                                       { category }
                                        </a>
                                    </MenuItem>

                                ))}
                                </div>
                            </MenuItems>
                            </Menu>
                            
                            <div>

                                { 
                                  subCategoryList && 
                                    Object.keys(subCategoryList).map((subCategoryName, index) => (
                                        <div key = {index} className='text-[#6E6E6E] border-b-[1px] border-[#6E6E6E] p-4 font-bold'>
                                                <a href = {`/category/${categoryName}/${subCategoryName}`} >
                                                    {subCategoryName}
                                                </a>
                                            </div>
                                        ))
                                        
                                    }
                            </div>

                        </div>
                        
                    </div>
                    {/* <div className=''> */}
                    <div className='grid col-span-4 lg:col-span-3'>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>

                            {filteredProducts.map((product, index) => (
                                <div key={index} className="bg-black text-white shadow-lg overflow-hidden border-[1px] border-solid rounded-[16px]">
                                    <div className="relative pb-2/3">
                                        <img 
                                            src={product.smallImage} 
                                            alt={product.name} 
                                            // layout="fill" 
                                            // objectFit="cover" 
                                            className="w-full h-48 object-contain"
                                            />
                                    </div>
                                    <div className="">
                                        <h2 className="text-xl font-semibold p-4">{product.name}</h2>

                                        <div className='grid grid-cols-2 border-t-[1px]'>
                                            <div className='flex justify-center items-center border-r-[1px] py-2'>
                                                <p className="text-gray-400">{product.smallDesc}</p>
                                            </div>
                                            <div className='flex justify-center items-center py-2'>
                                                <a href={`/product_details/${product.id}`} className="text-white px-4 py-2 inline-flex">
                                                    View &nbsp; <MdOutlineArrowOutward />
                                                </a>
                                            </div>

                                        </div>
                                        {/* <div className="mt-2">
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* {filteredProducts && filteredProducts.map((product, index) =>(
                    <a>
                        {product.category}
                    </a>
                ))} */}
            </div>
        </div>
    </section>
  )
}

export default AllProducts;
