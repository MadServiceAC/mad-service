import React from "react"
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import UserSide from "../../components/userside"
import DataDiri from "./children/datadiri"
import userimg from "../../assets/images/teknisi1.png"
import Footer from "../../components/footer"
import { Link } from "react-router-dom"

function Profiles() {
    const [activePage, setActivePage] = React.useState('dataDiri')
    const [isOpen, setIsOpen] = React.useState(false)

    return(
        <div className="flex flex-col min-h-screen">
         <section className="pt-20 max-w-8xl mb-auto">
            <div className="flex mx-auto">
                <div className="w-64 ms-12 my-8">
                    {/* disni link nav */}
                    <UserSide activePage={activePage} setActivePage={setActivePage} setIsOpen={setIsOpen}/>
                    <div className="flex flex-col items-center mt-8">
                        <img
                        src={userimg}
                        alt="Profile"
                        className="w-48 h-48 rounded-full object-cover mb-4 border-white border-8"
                        />
                        <button className="text-blue-500 hover:text-blue-800">Change Photo</button>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-8">
                    {activePage === 'dataDiri' && <DataDiri />}
                    {activePage === 'pesananService' && <div>Belum ada pesanan</div>}
                    <Transition appear show={isOpen}>
                        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                                <div className="fixed inset-0 flex w-screen items-center text-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-sm rounded-xl bg-white p-6">
                                    <DialogTitle className="font-bold py-4">Keluar dari akun anda?</DialogTitle>
                                    <div className="flex gap-x-4 justify-center mt-8">
                                        <button className="border border-gray-900 px-8 py-2 rounded-md font-semibold hover:bg-gray-100" onClick={() => setIsOpen(false)}>Tidak</button>
                                        <Link to="/">
                                        <button className="border text-gray-50 bg-red-600 px-8 py-2 rounded-md font-semibold hover:bg-red-700">keluar</button>
                                        </Link>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                                </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
         </section>
         <Footer/>
        </div>
    )
}

export default Profiles