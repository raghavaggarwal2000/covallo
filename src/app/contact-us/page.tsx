import React from 'react'
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

function ContactUs() {
  return (
    <section className='mt-[70px]'>
        <div className='w-[100%] relative'> 
        <div className='w-[100%] h-[100%] absolute' style={{ background: "rgb(0 0 0 / 40%)"}} />

          <div className='absolute top-[50%] left-[50%]' style ={{transform: "translate(-50%, -50%)"}}>

            <h2 className='text-3xl md:text-[48px]'>Contact us</h2>
          </div>
          <div className='w-[100%]'>
              <img src='/contact.jpg' className='w-[100%] '/> 

          </div>
        </div>




        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[100%] p-1 sm:p-10 bg-[#272727]'>
          <div className='xl:ml-32'>
            <div className='flex flex-col p-10'>
              <div>
                <h3> Get In Touch With US</h3>
              </div>
              <hr  className='color-white w-[100%] mt-6 border-[#6E6E6E]'/>

              <div className='flex mt-5 flex-col sm:flex-row '>
                  <div className='flex mr-4 flex-col'>

                      <div style={{display: "-webkit-inline-box"}}>
                          <MdOutlineLocationOn /> 
                          <p className = 'px-3  text-[#6E6E6E]'>
                            Balar Marketing Pvt Ltd Plot No. 217, Patparganj Industrial Area, New Delhi - 110092
                          </p>
                            
                      </div>
                      <div className='inline-flex'>
                          <MdOutlineEmail /> 
                          <p className = 'px-3  text-[#6E6E6E]'>
                            covalloswitchgear@gmail.com
                          </p>
                            
                      </div>
                      <div className='inline-flex'>
                          <HiOutlinePhone /> 
                          <p className = 'px-3  text-[#6E6E6E]'>
                            +91 97735 66077
                          </p>
                            
                      </div>
                  </div>

                  <div>
                    <ul  className='flex mr-4 flex-col'>
                      <li className='inline-flex '> <FaFacebook /> &nbsp; <a className = ' text-[#6E6E6E]'>Facebook</a></li>
                      <li className='inline-flex'> <FaYoutube /> &nbsp; <a className = ' text-[#6E6E6E]'>Youtube</a></li>
                    </ul>
                  </div>
              </div>

            </div>
          </div>


          <div className='xl:mr-32'>
            <div className='width-[100%] min-h-[100%] bg-black p-10'>

              <form className='px-6'>
                  {/* <input  
                    className='border-0 border-b-[1px] block mb-5 w-[100%] text-gray-300 bg-transparent appearance-none focus:outline-none'
                    placeholder='Full Name *' 
                    required
                  /> */}

                  <div className="relative z-0 mb-6">
                    <input 
                      type="text" 
                      id="full_name" 
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                      placeholder=" " 
                      required
                    />
                    <label 
                      htmlFor="full_name" 
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Full Name *
                      </label>
                </div>

                <div className="relative z-0 mb-6">
                    <input 
                      type="number" 
                      id="contact_us" 
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                      placeholder=" " 
                      required
                    />
                    <label 
                      htmlFor="contact_us" 
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Contact Us *
                      </label>
                </div>

                
                <div className="relative z-0 mb-6">
                    <input 
                      type="email" 
                      id="email" 
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Email
                      </label>
                </div>
                  
                <div className="relative z-0 mb-6">
                    <textarea 
                      // type="email" 
                      id="message" 
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                      placeholder=" " 
                      required
                    />
                    <label 
                      htmlFor="message" 
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Your Message *
                      </label>
                </div>

                 
                  <button
                    className='block rounded-3xl  min-w-[35%] font-extrabold mb-5  text-gray-300 bg-[#00A2FF] focus:outline-none p-2'
                    type='submit'
                  >
                    Submit Now
                  </button>
              </form>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default ContactUs;