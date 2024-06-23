import React from "react"

const Base = ({imageSrc, title, description}) =>
    {
        return (
            <div className="flex items-center flex-cols font-medium text-white p-2">
                <img src={imageSrc} alt={title} className="mr-2"/>
                <div className="text-start">
                    <h3 className="font-bold pl-2">{title}</h3>
                    <p className="p-2 font-normal">{description}</p>
                </div>
            </div>
        )
    }

export default Base