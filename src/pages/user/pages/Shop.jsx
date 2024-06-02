import React from "react"
import Navbar from "../components/Navbar"
import dataglobal from "../../dataglobal"
import imagebg from "../../../assets/images/shopbg.png"
import Heros from "../components/Heros"
import { Footer } from "../../../components"

function Shop() {
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title="Collection" subtitle="Lihat Katalog | Belanja Online" imagebg={imagebg}/>
        
        <Footer/>
        </>
    )
}
export default Shop