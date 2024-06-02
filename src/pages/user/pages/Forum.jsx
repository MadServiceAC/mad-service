import React from "react"
import dataglobal from "../../dataglobal"
import Navbar from "../components/Navbar"
import Heros from "../components/Heros"
import imagebg from "../../../assets/images/forumbg.png"
import { Footer } from "../../../components"

function Forum() {
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title="Forum" subtitle="Bergabung Sekarang | Ajukan Pertanyaan" imagebg={imagebg} className="text-white" />

        <Footer/>
        </>
    )
}
export default Forum