import React from "react"
import dataglobal from "../../dataglobal"
import Navbar from "../components/Navbar"
import Heros from "../components/Heros"
import imagebg from "../../../assets/images/forumbg.png"
import CommentSection from "../components/CommentSession"
import { Footer } from "../../../components"
import CommentInputHandler from "../components/CommentInputHandler"

function Forum() {
    return(
        <div className="flex flex-col min-h-screen">
        <Navbar links={dataglobal.links}/>
        <Heros title="Forum" subtitle="Bergabung Sekarang | Ajukan Pertanyaan" imagebg={imagebg} className="text-white" />
        <section className="py-16 mb-auto">
            <div className="max-w-screen-xl mx-auto">
                <div className="font-semibold border-s-4 border-blue-500 p-4 bg-sky-200 text-md text-gray-900 lg:my-4">
                      <h3 className="ps-6">Forum Diskusi</h3>
                </div>
                <CommentSection />
                <CommentInputHandler/>
            </div>
        </section>
        <Footer/>
        </div>
    )
}
export default Forum