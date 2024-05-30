import React from "react"
import logo from '../../assets/images/footerl.png'

const Footer = () =>
    {
        return(
            <footer className="bg-primary text-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-12 md:mb-0">
                        <a href="#" className="flex items-center">
                        <img src={logo} className="h-16 me-3" alt="Mad Service Logo" />
                        </a>
                        <p className="font-medium ms-2 mt-2">MadService melayani anda kapanpun</p>
                    </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div className="text-center">
                    <h2 className="mb-6 text-md font-semibold uppercase text-white">Informasi</h2>
                    <ul className="font-medium">
                        <li className="mb-4">
                        <a href="#" className="hover:underline">Detail Produk</a>
                        </li>
                    </ul>
                    </div>
                    <div className="text-center">
                    <h2 className="mb-6 text-md font-semibold uppercase text-white">Shop/Produk</h2>
                    <ul className="font-medium">
                        <li className="mb-4">
                        <a href="#" className="hover:underline ">Daftar Teknisi</a>
                        </li>
                        <li className="mb-4">
                        <a href="#" className="hover:underline">Daftar Peralatan</a>
                        </li>
                        <li className="mb-4">
                        <a href="#" className="hover:underline">pemesanan</a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline">Forum Diskusi</a>
                        </li>
                    </ul>
                    </div>
                    <div className="text-center">
                    <h2 className="mb-6 text-md font-semibold uppercase text-white">Kontak Kami</h2>
                    <ul className="font-medium">
                        <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-600 hover:text-white hover:bg-gray-600 bg-white rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 30 30" fill="currentColor">
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg>
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white hover:bg-gray-600 ms-5 bg-white rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 30 30" fill="currentColor">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                        <span className="sr-only">Linkedin</span>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white hover:bg-gray-600 ms-5 bg-white rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    </div>
                <span className="text-sm sm:text-center ">© 2024 <a href="#" className="hover:underline">Mad Service</a>. All Rights Reserved.
                </span>
            </div>
            </div>
            </footer>
        )
    }

    export default Footer