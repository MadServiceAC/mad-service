import React from "react"
import imageSrc from "../../../assets/images/items1.png"

const Pesanan = () => {
    const [activeTab, setActiveTab] = React.useState("perluDikirim")

    const renderContent = () => {
        switch (activeTab) {
            case "perluDikirim":
                return (
                    <div>
                        <div className="py-2 mx-8 border-b-2 border-gray-950">
                            <h3 className="text-lg font-semibold">Perlu dikirim</h3>
                        </div>
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
                        <div className="flex px-8 py-2 bg-white rounded-b-md mx-8 border border-gray-300 shadow-md justify-between">
                            <h3 className="basis-1/2 font-semibold text-sm text-blue-500 hover:text-blue-700 cursor-pointer">Lihat Detail Transaksi</h3>
                            <div className="flex gap-x-8 text-sm">
                                <p>Total pesanan</p>
                                <p className="font-semibold">Rp 4.313.000</p>
                            </div>
                        </div>
                    </div>
                )
            case "dikirim":
                return (
                    <div>
                        <div className="py-2 mx-8 border-b-2 border-gray-950">
                            <h3 className="text-lg font-semibold">Dikirim</h3>
                        </div>
                        <div className="flex mt-8 mx-8 p-8 border border-gray-300 rounded-md shadow-md">
                            <p>Tidak ada pesanan yang sedang dikirim.</p>
                        </div>
                    </div>
                )
            case "pembatalan":
                return (
                    <div>
                        <div className="py-2 mx-8 border-b-2 border-gray-950">
                            <h3 className="text-lg font-semibold">Pembatalan</h3>
                        </div>
                        <div className="flex mt-8 mx-8 p-8 border border-gray-300 rounded-md shadow-md">
                            <p>Tidak ada pesanan yang dibatalkan.</p>
                        </div>
                    </div>
                )
            case "selesai":
                return (
                    <div>
                        <div className="py-2 mx-8 border-b-2 border-gray-950">
                            <h3 className="text-lg font-semibold">Selesai</h3>
                        </div>
                        <div className="flex mt-8 mx-8 p-8 border border-gray-300 rounded-md shadow-md">
                            <p>Tidak ada pesanan yang selesai.</p>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="bg-white px-4 py-12 rounded-lg">
            <div className="grid grid-cols-4 gap-4 mx-8 my-6">
                <div
                    className={`flex text-center gap-y-2 items-center flex-col rounded-lg border-2 p-4 cursor-pointer ${activeTab === "perluDikirim" ? "text-blue-500 border-blue-500" : "text-gray-500 border-gray-300"}`}
                    onClick={() => setActiveTab("perluDikirim")}
                >
                    <h2 className="font-bold text-lg">1</h2>
                    <h3 className="font-bold">Perlu dikirim</h3>
                </div>
                <div
                    className={`flex text-center gap-y-2 items-center flex-col rounded-lg border-2 p-4 cursor-pointer ${activeTab === "dikirim" ? "text-yellow-500 border-yellow-500" : "text-gray-500 border-gray-300"}`}
                    onClick={() => setActiveTab("dikirim")}
                >
                    <h2 className="font-semibold text-lg">0</h2>
                    <h3 className="font-medium">Dikirim</h3>
                </div>
                <div
                    className={`flex text-center gap-y-2 items-center flex-col rounded-lg border-2 p-4 cursor-pointer ${activeTab === "pembatalan" ? "text-red-500 border-red-500" : "text-gray-500 border-gray-300"}`}
                    onClick={() => setActiveTab("pembatalan")}
                >
                    <h2 className="font-semibold text-lg">0</h2>
                    <h3 className="font-medium">Pembatalan</h3>
                </div>
                <div
                    className={`flex text-center gap-y-2 items-center flex-col rounded-lg border-2 p-4 cursor-pointer ${activeTab === "selesai" ? "text-green-500 border-green-500" : "text-gray-500 border-gray-300"}`}
                    onClick={() => setActiveTab("selesai")}
                >
                    <h2 className="font-semibold text-lg">0</h2>
                    <h3 className="font-medium">Selesai</h3>
                </div>
            </div>
            {renderContent()}
        </div>
    )
}

export default Pesanan