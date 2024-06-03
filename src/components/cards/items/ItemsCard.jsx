import React from "react"

const ItemsCard = ({imageSrc, item, price}) =>
    {
        return(
            <div className="block bg-white p-4 shadow-sm">
                <img
                    alt={item}
                    src={imageSrc}
                    className="h-auto w-full object-cover"
                />

                <h5 className="mt-4 text-sm font-bold text-gray-900 text-center">{item}</h5>

                <p className="mt-2 max-w-sm text-gray-700">
                    {price}
                </p>
            </div>
        )
    }
    
export default ItemsCard