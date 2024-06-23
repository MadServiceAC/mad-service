import React from "react"
import Heros from "../components/heros"
import Footer from "../components/footer"
import imagebg from "../assets/images/blogbg.png"
import ArticleCard from "../components/cards/article/ArticleCard"

const articles = [
    {
      title: "Panduan Merawat AC di Rumah",
      author: "John Doe",
      tanggalArtikel: "Minggu, 02 Juni 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "Merawat AC secara teratur sangat penting untuk memastikan kinerjanya tetap optimal. Berikut adalah beberapa tips merawat AC di rumah..."
    },
    {
      title: "Tips Memilih AC yang Tepat untuk Rumah Anda",
      author: "Jane Smith",
      tanggalArtikel: "Sabtu, 25 Mei 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "Memilih AC yang tepat dapat meningkatkan kenyamanan di rumah Anda. Pertimbangkan ukuran ruangan, konsumsi energi, dan fitur-fitur tambahan saat memilih AC..."
    },
    {
      title: "Perbedaan AC Inverter dan Non-Inverter",
      author: "Alex Johnson",
      tanggalArtikel: "Rabu, 15 Mei 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "AC Inverter dan Non-Inverter memiliki perbedaan yang signifikan dalam cara kerjanya. AC Inverter lebih hemat energi karena dapat menyesuaikan kecepatan kompresor dengan kebutuhan pendinginan..."
    },
    {
      title: "Cara Efektif Membersihkan Filter AC",
      author: "Emily Davis",
      tanggalArtikel: "Jumat, 10 Mei 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "Membersihkan filter AC secara rutin dapat meningkatkan kualitas udara dan efisiensi AC. Berikut adalah langkah-langkah mudah untuk membersihkan filter AC..."
    },
    {
      title: "Tanda-Tanda AC Perlu Diservis",
      author: "Michael Brown",
      tanggalArtikel: "Selasa, 30 April 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "AC yang tidak berfungsi dengan baik dapat menunjukkan beberapa tanda seperti suara aneh, pendinginan tidak merata, dan peningkatan tagihan listrik. Ketahui tanda-tanda lainnya di artikel ini..."
    }
  ]

function Blog() {
    return(
        <div className="flex flex-col min-h-screen">
        <Heros title="MadService Blog" subtitle="Baca Artikel Terbaru" imagebg={imagebg}/>
        <section className="py-16 mb-auto">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-lg font-medium mb-4">Tips & Trik Seputar AC untuk Rumah Anda</h2>
                <div className="flex flex-col gap-y-6">
                    {articles.map((article, index) => (
                        <ArticleCard
                        key={index}
                        title={article.title}
                        author={article.author}
                        tanggalArtikel={article.tanggalArtikel}
                        imageSrc={article.imageSrc}
                        isiArtikel={article.isiArtikel}
                        />
                    ))}
                </div>
            </div>
        </section>
        <Footer />
        </div>
    )
}
export default Blog