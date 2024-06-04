import React from "react"
import Navigation from "./components/navbar";
import Sidebar from "./components/sidebar"
import Dashboard from "./pages/dashboard"
import Pesanan from "./pages/pesanan"
import Penghasilan from "./pages/penghasilan"
import Produk from "./pages/produk"
import BestSell from "./pages/bestsell"
import TopSell from "./pages/topsell"
const tabs = [
    {id: 1, title: 'Dashboard', cont: <Dashboard />},
    {id: 2, title: 'Pesanan', cont: <Pesanan />},
    {id: 3, title: 'Penghasilan', cont: <Penghasilan />},
    {id: 4, title: 'Produk', cont: <Produk />},
    {id: 5, title: 'Best Seller', cont: <BestSell />},
    {id: 6, title: 'Top Seller', cont: <TopSell />},
    {id: 7, title: 'Logout'},
];

function Admin() {
    const [activeTab, setActiveTab] = React.useState(1);
    const [showLogoutModal, setShowLogoutModal] = React.useState(false)

    const activeTabContent = tabs.find(tab => tab.id === activeTab)?.cont

    const handleTabClick = (id) => {
        if (id === 7) {
            setShowLogoutModal(true)
        } else {
            setActiveTab(id)
        }
    }

    const handleLogout = () => {
        setShowLogoutModal(false)
        window.location.href = "/"
    };

    return (
        <div className="flex flex-col max-h-screen">
            <Navigation />
            <section className="py-16 mb-auto max-w-8xl lg:mt-12">
                <div className="flex mx-auto container gap-x-6">
                    <div className="w-1/4">
                        <Sidebar
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={handleTabClick}
                        />
                    </div>
                    <div className="w-3/4">
                        {activeTabContent}
                    </div>
                </div>
            </section>
            {showLogoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Keluar dari akun anda?</h2>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="bg-white border border-gray-200 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Admin
