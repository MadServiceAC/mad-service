import React, { useState, useEffect } from "react"
import UserService from "../svc/user.svc"
import Sections from "../components/sections"
import s1img from '../assets/images/section1.png'
import icons from '../components/iconhandler'
import section2 from '../assets/images/section2.png'
import section3 from '../assets/images/section3.png'
import handler from '../components/iconhandler'
import Hero from "../components/default/hero"
import Footer from "../components/footer"
import GridContainer from "../components/grid/GridContainer"
import itemsHandler from "../components/items.handler"
import CarouselContainer from "../components/carousel/CarouselContainer"

const Home = () => {
  const [content, setContent] = useState("")

  useEffect(() => {
    UserService.getPublicContent()
      .then(response => {
        setContent(response.data)
      })
      .catch(error => {
        const errorMessage = 
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        setContent(errorMessage)
      })
  }, []) 

  return (
    <div className="pt-8" id="home-section">
      <Hero/>
      <Sections className="mx-auto container my-16 lg:grid lg:grid-cols-2 gap-16 font-medium p-10">
      <div className='justify-center hidden lg:flex' name="about">
          <img src={s1img} alt='servis ac' className='w-96'/>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center h-fit my-4'>
            <span className='w-8 inline-block bg-blue-800 h-px mr-2'></span>
            <h3 className="text-blue-800">Welcome to MadService</h3>
          </div>
          <div>
            <h2 className='text-blue-800 text-2xl font-bold mb-2'>Servis AC cepat, tepat, dan hemat biaya</h2>
            <p>Kami menyediakan layanan servis AC terbaik dengan teknisi yang profesional dan berpengalaman dalam menangani berbagai macam masalah AC.</p>
            <div className='grid grid-cols-2 justify-evenly mt-12'>
            <div className='flex flex-col p-2 items-center text-center'>
              <img src={icons.helmetman} alt='Professional team' className='w-16'/>
              <h3 className='font-bold p-2'>Professional Team</h3>
              <p>Kelompok teknisi yang memiliki keahlian khusus dalam perbaikan, perawatan, pemasangan sistem pendingin udara (AC)</p>
            </div>
            <div className='flex flex-col p-2 items-center text-center'>
              <img src={icons.clock} alt='fullday availability' className='w-16'/>
              <h3 className='font-bold p-2'>24/7 Availability</h3>
              <p>Siap memberikan layanan kapan pun dibutuhkan oleh pelanggan</p>
            </div>
            </div>
          </div>
        </div>
      </Sections>
      <Sections useBackgroundImage backgroundImage={section2} className="bg-cover font-medium text-center pb-28">
      <div className='flex justify-center pt-10 ' name="service">
          <div className='flex items-center h-fit my-4'>
            <span className='w-8 inline-block bg-white h-px mr-2'></span>
            <h3 className="text-white">Our Service</h3>
          </div>
        </div>
        <h2 className='text-2xl text-white font-bold mb-12'>What Service We Offer</h2>
        <GridContainer items={itemsHandler.item}/>
      </Sections>
      <Sections className="font-medium text-center pb-28">
        <div className='flex justify-center pt-12' name="shop">
          <div className='flex items-center h-fit my-4'>
            <span className='w-8 inline-block bg-blue-800 h-px mr-2'></span>
            <h3 className="text-blue-800">Our Service</h3>
          </div>
        </div>
        <h2 className='text-2xl text-black font-bold'>What AC is best for you</h2>
        <div className="mt-16 flex items-center justify-center bg-gray-100">
          <CarouselContainer />
        </div> 
        <div className="mt-16 items-center justify-center">
          <a className="" href="shop">Shop Now</a>
        </div>
      </Sections>
      <Sections useBackgroundImage backgroundImage={section3} className="bg-cover mx-auto lg:grid lg:grid-cols-2 gap-16 font-medium text-white p-10">
        <div className='flex flex-col px-12 py-4' name="contact">
            <h1 className="text-3xl font-bold">We are here to help you. If you have any questions, let us know!</h1>
            <div className='grid grid-cols-1 gap-4 mt-12 text-black font-normal'>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Name" />
            <input type='email' className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Message" rows="5" />
            <button className="bg-button hover:bg-yellow-500 text-gray-900 p-3 px-6 w-fit rounded-lg shadow-md font-medium">Send Message</button>
            </div>
        </div>
        <div className='hidden lg:flex px-8 py-4'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075411.3469849597!2d94.00622053189848!3d4.042070193754005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30399bdf507cc4bd%3A0x1039d80b220ca60!2sAceh!5e0!3m2!1sid!2sid!4v1717046300707!5m2!1sid!2sid&z=10" width="600" height="450"/>
        </div>
      </Sections>
      <Footer/>
    </div>
  )
}

export default Home
