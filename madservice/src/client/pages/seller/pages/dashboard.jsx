import React from "react"
import imageSrc from "../../../assets/images/items1.png"

const Dashboard = () => {
    return(
        <div className="bg-white p-4 rounded-lg">
            <h2 className="p-4 font-semibold">Toko AC Lengkap & Murah - Dapatkan Solusi AC Anda di Sini!</h2>
            <div className="grid grid-cols-3 gap-4 mx-8 my-6">
                <div className="flex text-center items-center flex-col">
                    <svg className="size-16" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12H17M18 7H18.009M6.8 18C6.8 18 7.6 19.875 6 21M17.2 18C17.2 18 16.4 19.875 18 21M12 18V21M16 3C18.339 3 19.508 3 20.362 3.536C20.8075 3.81584 21.1842 4.19251 21.464 4.638C22 5.492 22 6.66 22 9C22 11.34 22 12.508 21.463 13.362C21.1836 13.8069 20.8077 14.1832 20.363 14.463C19.507 15 18.338 15 16 15H8C5.661 15 4.492 15 3.638 14.463C3.19273 14.1837 2.81608 13.8078 2.536 13.363C2 12.507 2 11.338 2 9C2 6.662 2 5.492 2.536 4.638C2.81584 4.19251 3.19251 3.81584 3.638 3.536C4.492 3 5.66 3 8 3H16Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="font-medium py-4">Product</h3>
                </div>
                <div className="flex text-center items-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> 
                    <h3 className="font-medium py-4">Penghasilan</h3>
                </div>
                <div className="flex text-center items-center flex-col">
                <svg className="size-16" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.21 13.8899L7 22.9999L12 19.9999L17 22.9999L15.79 13.8799" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                    <h3 className="font-medium py-4">Best Seller</h3>
                </div>
            </div>
            <h3 className="p-4">Status Pesanan</h3>
            <div className="grid grid-cols-4 gap-4 mx-8 my-6">
                <div className="flex text-center gap-y-2 items-center flex-col text-blue-500 rounded-lg border-2 p-4 border-blue-500">
                    <h2 className="font-semibold text-lg">1</h2>
                    <h3 className="font-medium">Perlu dikirim</h3>
                </div>
                <div className="flex text-center gap-y-2 items-center flex-col text-yellow-500 rounded-lg border-2 p-4 border-yellow-500">
                    <h2 className="font-semibold text-lg">0</h2>
                    <h3 className="font-medium">Dikirim</h3>
                </div>
                <div className="flex text-center gap-y-2 items-center flex-col text-red-500 rounded-lg border-2 p-4 border-red-500">
                    <h2 className="font-semibold text-lg">0</h2>
                    <h3 className="font-medium">Pembatalan</h3>
                </div>
                <div className="flex text-center gap-y-2 items-center flex-col text-green-500 rounded-lg border-2 p-4 border-green-500">
                    <h2 className="font-semibold text-lg">0</h2>
                    <h3 className="font-medium">Selesai</h3>
                </div>
            </div>
            <h3 className="p-4">Top Seller</h3>
            <div className="flex flex-col mx-6 mb-4">
                <div className="flex items-center gap-x-8">
                    <div className="rounded-full bg-yellow-500 border border-gray-100 py-4 px-6 text-center justify-center">
                        <h1 className="text-2xl">1</h1>
                    </div>
                    <div className="flex shadow-md p-4 gap-x-8 rounded-sm">
                        <img src={imageSrc} alt="item 1" className="w-1/4"/>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-medium">DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)</h3>
                            <p>Rp 4.299.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard