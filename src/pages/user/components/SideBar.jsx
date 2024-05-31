import React from "react"

const SideBar = () =>
    {
        return(
            <div className="lg:flex flex-col justify-between sticky top-12 h-full px-4 py-6 mt-6 hidden">
                <div className="px-4 py-6">
                    <h3 className="font-semibold border-s-4 border-blue-500 grid h-12 w-40 place-content-center bg-sky-200 text-md text-gray-900">
                    Layanan
                    </h3>

                    <ul className="mt-6 ms-2 space-y-2">
                        <li>
                            <a
                            href="#"
                            className="flex bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-md justify-between"
                            >
                            <span>Perawatan AC</span>
                            <span className="text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="flex bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-md justify-between"
                            >
                            <span>Instalasi AC</span>
                            <span className="text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="flex bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-md justify-between"
                            >
                            <span>Isi Freon AC</span>
                            <span className="text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="flex bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-md justify-between"
                            >
                            <span>Reparasi AC</span>
                            <span className="text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    export default SideBar