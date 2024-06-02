import React from "react"

const ArticleCard = ({title, author, tanggalArtikel, imageSrc, isiArtikel}) => {
    return(
        <div className="bg-white p-4 flex gap-x-8 shadow-md">
            <img src={imageSrc} alt="image" />
            <div className="p-2 flex flex-col gap-y-1 text-base">
                <h3 className="font-medium text-blue-600">{title}</h3>
                <p className="text-xs text-gray-400">{author} | {tanggalArtikel}</p>
                <p className="my-4 text-sm">{isiArtikel}</p>
                <span className="text-xs text-blue-500 select-none">Baca Selengkapnya &rarr;</span>
            </div>
        </div>
    )
}
export default ArticleCard