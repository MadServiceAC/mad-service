import React from "react"
import Heros from '../components/heros'
import SideBar from "../components/sidebar"
import Search from "../components/default/input/Search"
import SvcCard from "../components/cards/svc-card/SvcCard"
import TcardContainer from "../components/TcardContainer"
import techcnicbg from '../assets/images/technicbg.png'
import UlasanContainer from "../components/UlasanContainer"
import Footer from '../components/footer'
import imagebg from '../assets/images/banner-service.png'
import imageSrc from '../assets/images/prwac.png'
import x from '../assets/images/teknisi1.png'


export default Service
const serviceData = {
    title: 'PERAWATAN AC',
    imageSrc: imageSrc,
    services: [
      { name: 'Cuci AC 0,5 - 1 PK', price: 'Rp 75.000' },
      { name: 'Cuci AC 1,5 - 2 PK', price: 'Rp 85.000' },
      { name: 'Cuci AC Inverter 0,5 - 2 PK', price: 'Rp 130.000' },
      { name: 'Vacuum & Flushing AC', price: 'Rp 350.000' },
      { name: 'Flushing Evaporator', price: 'Rp 200.000' },
      { name: 'Vacuum AC', price: 'Rp 150.000' },
      { name: 'Pengecekan AC 0,5 - 2 PK', price: 'Rp 65.000' },
    ]
}

const cards = [
    {
      imageSrc: x,
      rating: "4.5",
      reviewers: "102",
      name: "Luthfi Ilmukti",
    },
  ]

  let reviews = [
    {
      name: "test1",
      time: "17 days ago",
      rating: "4.6",
      content: "Teknisi MadService ramah dan profesional. Pasang AC saya dengan cepat dan rapi."
    },
  ]
function Service() {
    return(
        <div className="flex flex-col min-h-screen">
        <Heros title='Our Services' subtitle='Hubungi Kami | Pesan layanan' imagebg={imagebg}/>
        <section className="mb-auto">
        <div className="container mx-auto flex">
            <SideBar/>
            <div className="flex-1 p-8">
                <div className="flex flex-col mb-4 space-y-4">
                        <div className="flex justify-end">
                            <Search/>
                        </div>
                        <h1 className="text-xl font-semibold">Service AC Handal & Terpercaya untuk Kenyamanan Anda</h1>
                </div>
                <SvcCard
                    title={serviceData.title}
                    imageSrc={serviceData.imageSrc}
                    services={serviceData.services}
                />
            </div>
        </div>
        <div className="hidden lg:block mt-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <h3 className="font-semibold border-s-4 border-blue-500 grid h-12 w-40 place-content-center bg-sky-200 text-md text-gray-900">
                      Teknisi
              </h3>
            </div>
        </div>
        <div className="mt-8 bg-auto" style={{ backgroundImage: `url(${techcnicbg})` }}>
        <h2 className="font-bold text-xl text-white px-4 lg:px-32 pt-16">Teknisi Service AC Profesional & Berpengalaman</h2>
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:pb-16">
                <TcardContainer cards={cards}/>
            </div>
        </div>
        <div className="hidden lg:block mt-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <h3 className="font-semibold border-s-4 border-blue-500 grid h-12 w-40 place-content-center bg-sky-200 text-md text-gray-900">
                      Ulasan
              </h3>
            </div>
        </div>
        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <UlasanContainer reviews={reviews}/>
          </div>
        </div>
        <div>
        <div className="p-6 bg-gray-100 flex items-center justify-center mx-auto max-w-screen-xl">
          {/* <InputTextWithPopup/> */}
        </div>
        </div>
        </section>
        <Footer/>
        </div>
    )
}