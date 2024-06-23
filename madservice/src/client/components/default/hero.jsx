import React from "react"
import image from "../../assets/images/heros.png"
import { Link, animateScroll as scroll } from "react-scroll"
import authSvc from "../../svc/auth.svc"

export default function Hero() {
    const isLogin = authSvc.isLoggedIn()

    return(
        <div className="h-screen" style={{ backgroundImage: `url(${image})` }}>
            <div className="container mx-auto pt-40 text-white">
                <div className="gap-4">
                <div>
                    <h1 className="text-5xl font-bold mb-2 text-yellow-400">Air Conditioners</h1>
                    <h1 className="text-5xl font-semibold mb-5 ">Maintenance and Diagnostics</h1>
                    <p className="font-medium text-lg">Apakah AC Anda tidak lagi dingin?</p>
                    <p className="font-medium text-lg">
                    Apakah AC Anda mengeluarkan suara bising yang mengganggu?
                    </p>
                    <p className="mb-10 font-medium text-lg">
                    Jika ya, maka Anda membutuhkan jasa servis AC terpercaya.
                    </p>
                    <div className="flex space-x-4">
                        {!isLogin ? (
                            <>
                                <button className="bg-button hover:bg-yellow-500 text-black px-12 py-3 rounded-lg font-bold">Daftar Sekarang</button>
                                <Link to="about" smooth={true} duration={800} offset={-130} className="bg-white text-black px-12 py-3 rounded-lg font-bold cursor-pointer hover:bg-gray-200">Selengkapnya &#8594;</Link>
                            </>
                        ) :
                        (
                            <>
                                <Link to="about" smooth={true} duration={800} offset={-130} className="bg-white text-black px-12 py-3 rounded-lg font-bold cursor-pointer hover:bg-gray-200">Selengkapnya &#8594;</Link>
                            </>
                        )}
              </div>
                </div>
                </div>
            </div>
        </div>
    )
}