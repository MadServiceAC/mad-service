import React from "react"
import Navbar from '../components/Navbar'
import Heros from '../components/Heros'
import SideBar from "../components/SideBar";
import Search from "../../../components/input/Search";
import SvcCard from "../../../components/cards/svc-card/SvcCard";
import imageSrc from "../../../assets/images/prwac.png"
import TcardContainer from "../components/TcardContainer";

export default Service

function Service() {
    const cards = [
        {
          imgSrc: "image1.jpg",
          rating: "4.5",
          reviewersCount: "100",
          name: "Card 1",
        },
        {
          imgSrc: "image2.jpg",
          rating: "4.7",
          reviewersCount: "150",
          name: "Card 2",
        },
        {
          imgSrc: "image3.jpg",
          rating: "4.9",
          reviewersCount: "200",
          name: "Card 3",
        },
        {
          imgSrc: "image4.jpg",
          rating: "4.8",
          reviewersCount: "250",
          name: "Card 4",
        },
      ];

    const links = [
        { path: '/service', text: 'SERVICE' },
        { path: '/shop', text: 'SHOP' },
        { path: '/blog', text: 'BLOG' },
        { path: '/forum', text: 'FORUM' },
        { path: '/contact', text: 'CONTACT' },
      ];

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
      };

    return(
        <>
        <Navbar links={links}/>
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
                    title={serviceData.title}
                    imageSrc={serviceData.imageSrc}
                    services={serviceData.services}
                />
            </div>
        </div>
        <div className="container mx-auto flex">
            <div className="h-screen hidden lg:block">
            <div className="h-screen px-8 py-12">
                <h3 className="font-semibold border-s-4 border-blue-500 grid h-12 w-40 place-content-center bg-sky-200 text-md text-gray-900">
                    Teknisi
                </h3>
            </div>
            </div>
            <div className="flex-1 p-8 mt-4">
                <TcardContainer cards={cards}/>
            </div>
        </div>
        
        </>
    )
}