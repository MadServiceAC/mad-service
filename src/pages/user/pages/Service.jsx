import React, {useState} from "react"
import dataglobal from '../../dataglobal'
import minidata from '../minidata'
import Navbar from '../components/Navbar'
import Heros from '../components/Heros'
import SideBar from "../components/SideBar";
import Search from "../../../components/input/Search";
import SvcCard from "../../../components/cards/svc-card/SvcCard";
import TcardContainer from "../components/TcardContainer";
import techcnicbg from '../../../assets/images/technicbg.png'
import UlasanContainer from "../components/UlasanContainer";
import Footer from '../../../components/footer/Footer'
import InputTextWithPopup from "../../../components/input/InputPopup"

export default Service

function Service() {
  const [reviews, setReviews] = useState(minidata.reviews);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title='Our Services' subtitle='Hubungi Kami | Pesan layanan'/>
        <div className="container mx-auto flex">
            <SideBar/>
            <div className="flex-1 p-8">
                <div className="flex flex-col mb-8 space-y-4">
                        <div className="flex justify-end">
                            <Search/>
                        </div>
                        <h1 className="text-3xl font-semibold">Service AC Handal & Terpercaya untuk Kenyamanan Anda</h1>
                </div>
                <SvcCard
                    title={minidata.serviceData.title}
                    imageSrc={minidata.serviceData.imageSrc}
                    services={minidata.serviceData.services}
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
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <TcardContainer cards={minidata.cards}/>
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
            <UlasanContainer reviews={minidata.reviews}/>
          </div>
        </div>
        <div>
        <div className="p-6 bg-gray-100 flex items-center justify-center mx-auto max-w-screen-xl">
          <InputTextWithPopup/>
        </div>
        </div>
        <Footer/>
        </>
    )
}