import React from "react"
import Navbar from "../components/Navbar"
import dataglobal from "../../dataglobal"
import imagebg from "../../../assets/images/shopbg.png"
import Heros from "../components/Heros"
import { Footer } from "../../../components"
import ItemsCard from "../../../components/cards/items/ItemsCard"
import imageSrc from "../../../assets/images/items1.png"
import Search from "../../../components/input/Search"


function Shop() {
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title="Collection" subtitle="Lihat Katalog | Belanja Online" imagebg={imagebg}/>
        <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row">
            <div className="hidden lg:block top-[3.8125rem] shrink-0 left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6">
                <nav className="text-sm py-12 flex flex-col gap-y-4">
                    <div className="border-s-4 border-blue-500 bg-sky-200 font-bold mb-2">
                        <h3 className="text-md text-gray-900 p-4 ms-2">Best Seller</h3>
                    </div>
                    <ItemsCard
                        item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                        price=""
                        imageSrc={imageSrc}
                    />
                    <div className="flex gap-6 justify-center mx-auto">
                        <button className="inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring cursor-not-allowed opacity-50">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button className="inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring cursor-not-allowed opacity-50">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="border-s-4 border-blue-500 bg-sky-200 font-bold mt-12 mb-2">
                        <h3 className="text-md text-gray-900 p-4 ms-2">Top Selling</h3>
                    </div>
                    <ItemsCard
                        item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                        price=""
                        imageSrc={imageSrc}
                    />
                </nav>
            </div>
            <div className="flex-grow pt-10">
                <div className="w-full px-16">
                    <div className="flex flex-col mb-12 space-y-4">
                            <div className="flex justify-end">
                                <Search/>
                            </div>
                            <h1 className="text-xl font-semibold">Toko AC Lengkap & Murah - Dapatkan Solusi AC Anda di Sini!</h1>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ItemsCard
                            item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                            price=""
                            imageSrc={imageSrc}
                        />
                        <ItemsCard
                            item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                            price=""
                            imageSrc={imageSrc}
                        />
                        <ItemsCard
                            item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                            price=""
                            imageSrc={imageSrc}
                        />
                        <ItemsCard
                            item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                            price=""
                            imageSrc={imageSrc}
                        />
                        {/* Tambahkan lebih banyak <ItemsCard> sesuai kebutuhan */}
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Shop