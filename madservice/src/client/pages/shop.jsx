import React from "react"
import imagebg from "../assets/images/shopbg.png"
import Heros from '../components/heros'
import Footer from '../components/footer'
import ItemsCard from "../components/cards/items/ItemsCard"
import imageSrc from "../assets/images/items1.png"
import Search from "../components/default/input/Search"
import Counter from "../components/Counter"
import ProductDataService from "../svc/products.svc"


function Shop() {
    const [products, setProducts] = React.useState([])
    const [selectedItem, setSelectedItem] = React.useState(null)

    const handleCardClick = (productId) => {
        const selectedProduct = products.find((product) => product.id === productId)
        setSelectedItem(selectedProduct)
      }
      const handleBackClick = () => {
        setSelectedItem(null)
      }

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await ProductDataService.getAllProducts()
            setProducts(response.data)
          } catch (error) {
            console.error("Error fetching the product data:", error)
          }
        }
    
        fetchData()
      }, [])

      
    return(
        <div className="flex flex-col min-h-screen">
        <Heros title="Collection" subtitle="Lihat Katalog | Belanja Online" imagebg={imagebg}/>
        <section className="max-w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row mb-auto">
            <div className="hidden lg:block top-[3.8125rem] shrink-0 left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6">
                <nav className="text-sm py-12 flex flex-col gap-y-4">
                    <div className="border-s-4 border-blue-500 bg-sky-200 font-bold mb-2">
                        <h3 className="text-md text-gray-900 p-4 ms-2">Best Seller</h3>
                    </div>
                        {products.map((product) => (
                        <ItemsCard
                            key={product.id}
                            item={product.name}
                            price={product.price}
                            imageSrc={product.image_path || "https://placehold.co/200x200"} 
                        />
                        ))}
                    <div className="flex gap-6 justify-center mx-auto">
                        <button className="inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring cursor-not-allowed opacity-50">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button className="inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring cursor-not-allowed opacity-50">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="border-s-4 border-blue-500 bg-sky-200 font-bold mt-12 mb-2">
                        <h3 className="text-md text-gray-900 p-4 ms-2">Top Selling</h3>
                    </div>
                    <ItemsCard
                        item="DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)"
                        price=""
                        imageSrc={imageSrc}
                        onClick={() => handleCardClick("DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)")}
                    />
                </nav>
            </div>
            <div className="flex-grow w-max pt-10">
                <div className="px-16 block">
                    <div className="flex flex-col mb-12 space-y-4">
                            <div className="flex justify-end">
                                <Search/>
                            </div>
                            <h1 className="text-xl font-semibold">Toko AC Lengkap & Murah - Dapatkan Solusi AC Anda di Sini!</h1>
                    </div>
                    {selectedItem ? (
                        <div className="bg-white px-8 py-4 shadow-sm mb-16">
                        <div className="py-4 transition ease-in-out duration-150" onClick={handleBackClick}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5 cursor-pointer"
                            >
                            <path
                                fillRule="evenodd"
                                d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex gap-x-12 mx-auto my-4">
                            <img
                                src={selectedItem?.image_path || "https://placehold.co/200x200"} // Gunakan path gambar dari database atau default
                                alt={selectedItem?.name || "Product Image"}
                                className="w-60"
                            />
                            <div className="p-2 flex flex-col gap-y-2">
                                <h3 className="font-semibold">
                                {selectedItem?.name || "Nama Produk"}
                                </h3>
                                <p className="text-blue-600 font-normal text-sm">
                                Rp {selectedItem?.price || 0}
                                </p>
                                <div className="flex justify-end gap-x-8 items-center mt-10">
                                <Counter />
                                <button className="bg-button text-gray-900 hover:bg-yellow-500 font-medium px-8 py-2 rounded-lg flex items-center shadow-lg">
                                    Beli Sekarang
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Use selectedItem to display product details */}
                        <div className="mx-8 my-4 p-4 text-sm">
                        <h1 className="text-2xl font-bold mb-4">Deskripsi Produk</h1>
                        <p className="mb-4">{selectedItem?.description || "Deskripsi tidak tersedia"}</p>

                        <h2 className="text-xl font-semibold mb-2">Spesifikasi Produk</h2>
                        <ul className="list-inside mb-4 text-underline">
                        {Object.keys(selectedItem || {}).map((key) => {
                            const excludedKeys = ['product_feature', 'description', 'image_path', 'id', 'name', 'price', 'userId', 'createdAt', 'updatedAt']
                            if (!excludedKeys.includes(key)) {
                            return <li key={key}>{key}: {selectedItem[key]}</li>
                            }
                            return null
                        })}
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">Fitur Produk</h2>
                        <ul className="list-disc list-outside ps-4">
                        {(selectedItem?.features || []).map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                        </ul>
                    </div>
                        </div>
                    ) : (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ItemsCard
                            key={product.id}
                            item={product.name}
                            price={'Rp ' + product.price}
                            imageSrc={product.image_path || "https://placehold.co/200x200"}
                            onClick={() => handleCardClick(product.id)}
                            />
                        ))}
                        </div>
                    )}
                    
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    )
}
export default Shop