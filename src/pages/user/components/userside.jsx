import React from "react"

const UserSide = ({ activePage, setActivePage, setIsOpen }) => {
    return (
        <nav className="bg-white shadow-lg p-4 rounded-md">
            <ul>
                <li className="mb-4">
                    <button
                        className={`w-full text-left p-2 rounded inline-flex gap-x-4 items-center ${activePage === 'dataDiri' ? 'bg-blue-500 text-gray-50' : 'hover:bg-gray-100'}`}
                        onClick={() => setActivePage('dataDiri')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </span>
                        Data Diri
                    </button>
                </li>
                <li className="mb-4">
                    <button
                        className={`w-full text-left p-2 rounded inline-flex gap-x-4 items-center ${activePage === 'pesananService' ? 'bg-blue-500 text-gray-50' : 'hover:bg-gray-100'}`}
                        onClick={() => setActivePage('pesananService')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                            </svg>
                        </span>
                        Pesanan Service
                    </button>
                </li>
                <li>
                    <button className='w-full text-left p-2 rounded inline-flex gap-x-4 items-center hover:bg-gray-100'
                        onClick={() => setIsOpen(true)}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Keluar
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default UserSide
