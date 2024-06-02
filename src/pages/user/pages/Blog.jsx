import React from "react"
import dataglobal from "../../dataglobal"
import Navbar from "../components/Navbar"
import Heros from "../components/Heros"
import {Footer} from "../../../components"
import imagebg from "../../../assets/images/blogbg.png"
import minidata from "../minidata"
import ArticleCard from "../../../components/cards/article/ArticleCard"

function Blog() {
    return(
        <>
        <Navbar links={dataglobal.links}/>
        <Heros title="MadService Blog" subtitle="Baca Artikel Terbaru" imagebg={imagebg}/>
        <section className="my-16">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-lg font-medium mb-4">Tips & Trik Seputar AC untuk Rumah Anda</h2>
                <div className="flex flex-col gap-y-6">
                    {minidata.articles.map((articles, index) => (
                        <ArticleCard
                        key={index}
                        title={articles.title}
                        author={articles.author}
                        tanggalArtikel={articles.tanggalArtikel}
                        imageSrc={articles.imageSrc}
                        isiArtikel={articles.isiArtikel}
                        />
                    ))}
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
export default Blog