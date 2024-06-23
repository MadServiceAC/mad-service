import React from "react"

const Cardcon = ({svg, title, content}) =>
    {
        return(
            <article
            className="hover:animate-background rounded-xl p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
            <div className="rounded-[10px] bg-white p-4 sm:p-6">
                <div className="px-4 flex gap-x-6">
                    <div className="text-white bg-blue-500 rounded-full p-6">
                        {svg}
                    </div>

                    <div className="flex flex-col gap-2 justify-center">
                        <h4 className="font-bold text-lg">{title}</h4>
                        <p className="text-sm">{content}</p>
                    </div>
                </div>
            </div>
        </article>
        )
    }
    export default Cardcon