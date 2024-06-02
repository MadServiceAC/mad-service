import React from "react"
import dataglobal from "../../dataglobal"
import Navbar from "../components/Navbar"
import Heros from "../components/Heros"
import {Footer} from "../../../components"
import imagebg from "../../../assets/images/blogbg.png"

function Blog() {
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title="MadService Blog" subtitle="Baca Artikel Terbaru" imagebg={imagebg}/>
        
        <Footer />
        </>
    )
}
export default Blog