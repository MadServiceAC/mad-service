import React from "react"
import {Hero, Navbar, Sponsor, Sections, GridContainer, CarouselContainer, icons, Input, Iframe, Footer} from '../../components'
import s1img from '../../assets/images/section1.png'
import section2 from '../../assets/images/section2.png'
import section3 from '../../assets/images/section3.png'
import minidata from '../user/minidata'
import dataglobal from "../dataglobal"

export default Home

function Home() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Sponsor/>
      <Sections useBackgroundImage={false} className="mx-auto container mt-16 lg:grid lg:grid-cols-2 gap-16 font-medium p-10">
        <div className='justify-center hidden lg:flex'>
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
      <Sections useBackgroundImage={true} backgroundImage={section2} className='bg-cover font-medium text-center pb-28'>
        <div className='flex justify-center pt-10'>
          <div className='flex items-center h-fit my-4'>
            <span className='w-8 inline-block bg-white h-px mr-2'></span>
            <h3 className="text-white">Our Service</h3>
          </div>
        </div>
        <h2 className='text-2xl text-white font-bold mb-12'>What Service We Offer</h2>
        <GridContainer items={minidata.item}/>
      </Sections>
      <Sections useBackgroundImage={false} className='font-medium text-center pb-28'>
      <div className='flex justify-center pt-12'>
          <div className='flex items-center h-fit my-4'>
            <span className='w-8 inline-block bg-blue-800 h-px mr-2'></span>
            <h3 className="text-blue-800">Our Service</h3>
          </div>
        </div>
        <h2 className='text-2xl text-black font-bold'>What AC is best for you</h2>
        <div className="mt-16 flex items-center justify-center bg-gray-100">
          <CarouselContainer />
        </div>
      </Sections>
      <Sections useBackgroundImage={true} backgroundImage={section3} className='bg-cover mx-auto lg:grid lg:grid-cols-2 gap-16 font-medium text-white p-10'>
        <div className='flex flex-col px-12 py-4'>
            <h1 className="text-3xl font-bold">We are here to help you. If you have any questions, let us know!</h1>
            <div className='grid grid-cols-1 gap-4 mt-12 text-black font-normal'>
            <Input styleType="default" placeholder="Naame" />
            <Input type='email' styleType="default" placeholder="Email" />
            <Input styleType="paragraph" placeholder="Message" rows="5" />
            <button className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 p-3 px-6 w-fit rounded-lg shadow-md font-medium">Send Message</button>
            </div>
        </div>
        <div className='hidden lg:flex px-8 py-4'>
          <Iframe src={dataglobal.iframeSrc} width="600" height="450"/>
        </div>
      </Sections>
      <Footer/>
    </>
  )
}