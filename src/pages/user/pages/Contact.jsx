import React from "react"
import dataglobal from "../../dataglobal"
import Navbar from "../components/Navbar"
import Heros from "../components/Heros"
import imagebg from '../../../assets/images/contacbg.png'
import Cardcon from "../../../components/cards/contac/cardcon"
import { Footer, Iframe, Input } from "../../../components"

function Contact() {
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title="Contact Us" subtitle="Hubungi Kami | Kirim Email | Kunjungi Lokasi" imagebg={imagebg}/>
        <section className="my-16">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex gap-4 justify-center">
                    <Cardcon 
                    svg={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                            <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                    }
                    title="Call Us"
                    content="+6282275967281"
                    />
                    <Cardcon 
                    svg={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    }
                    title="Email"
                    content="madserviceac@gmail.com"
                    />
                    <Cardcon
                    svg={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                        </svg>
                    }
                    title="Alamat"
                    content="Lhokseumawe"
                    />
                </div>
                <div className="text-center mt-12 py-8">
                    <h4 className="font-bold text-xl">Get in Touch</h4>
                    <p className="py-4 font-medium text-blue-500">We are to help you. If you have any question, let us now!</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-md">
                    <form action="#" className="mt-8 px-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                        Name
                        </label>

                        <Input id='Name' styleType="default" placeholder="Name" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>

                        <Input id='email' type="email" styleType="default" placeholder="email@example.com" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">Phone</label>

                        <Input id='Phone' styleType="phonenumber" placeholder="+62"/>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                        Service
                        </label>

                        <Input id='service' styleType="default" placeholder="Service" />
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <Input id='message' styleType="paragraph" placeholder="Message" rows="5"/>
                    </div>

                    <div className="col-span-6">
                        <button className="text-sm font-medium bg-yellow-400 hover:bg-yellow-600 w-full py-2 rounded-md shadow-md">Send Message</button>
                    </div>
                    </form>
                </div>
                <div className="text-center my-12">
                    <h3 className="font-medium">Follow our social network</h3>
                    <div className="flex justify-center my-4">
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
                </div>
                <Iframe src={dataglobal.iframeSrclg} width="1280" height="720" style={{ borderRadius: '1.250rem' }}/>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Contact