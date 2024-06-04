import React from "react"
import imageSrc from "../../../assets/images/items1.png"

const Penghasilan = () => {
    const [activeTab, setActiveTab] = React.useState(0)

    return(
        <div className="bg-white p-8 rounded-lg">
            <div className="flex mb-8">
            <h2 className="text-2xl font-bold basis-1/4">Total</h2>
            <h2 className="text-2xl font-bold basis-3/4">Rp 0</h2>
            </div>
            <div className="flex mb-4">
                <button
                className={`font-semibold text-lg shrink-0 basis-1/2 px-4 py-2 ${activeTab === 0 ? 'border-b-2 border-blue-500 text-blue-500' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab(0)}
                >
                Pending
                </button>
                <button
                className={`font-semibold text-lg shrink-0 basis-1/2 px-4 py-2 ${activeTab === 1 ? 'border-b-2 border-blue-500 text-blue-500' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab(1)}
                >
                Sudah Dilepas
                </button>
            </div>
            <div className="p-4">
                {activeTab === 0 && 
                <div>
                    <h2 className="text-2xl font-bold text-center">Rp 4.313.000</h2>
                    <div className="flex mt-8 mx-8 p-8 border border-gray-300 rounded-t-md shadow-md">
                            <div className="flex flex-col">
                                <div className="flex gap-x-3 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-10"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h2 className="font-semibold">Ikram</h2>
                                </div>
                                <div className="flex gap-x-4 my-4">
                                    <p className="font-semibold">17 Mei 2024, 22:40:05</p>
                                    <p>|</p>
                                    <p className="font-normal">Nomor Pesanan:  HC252KQPO8WI76</p>
                                </div>
                                <h3 className="mt-2">Air conditioner</h3>
                                <div className="flex gap-x-6 mt-6">
                                    <img src={imageSrc} className="w-1/3" alt="item 1" />
                                    <div className="flex flex-col gap-y-3 pt-2">
                                        <h3 className="font-semibold">DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)</h3>
                                        <p>Putih</p>
                                        <p>FTC15NV14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>}
                {activeTab === 1 && 
                <div>
                    <h2 className="text-2xl font-bold text-center">Rp 0</h2>
                </div>}
            </div>
        </div>
    )
}
export default Penghasilan