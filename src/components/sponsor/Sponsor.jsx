import React from "react"
import imgx1 from '../../assets/images/logox1.png'
import imgx2 from '../../assets/images/logox2.png'
import imgx3 from '../../assets/images/logox3.png'
import imgx4 from '../../assets/images/logox4.png'

const Sponsor = () => {
    return(
        <div className="hidden w-fit mx-auto p-4 -mt-20 lg:flex justify-center space-x-4 rounded bg-white shadow-md">
            <img src={imgx1} className="h-24"/>
            <img src={imgx2} className="h-24"/>
            <img src={imgx3} className="h-24"/>
            <img src={imgx4} className="h-24"/>
        </div>
    )
}

export default Sponsor