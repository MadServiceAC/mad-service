import React from 'react'
import PopUp from './popup'
import ProductDataService from '../../../svc/products.svc'
import AddStock from './addstock'


const ProductList = () => {
  const [products, setProducts] = React.useState([])
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenAddStock, setIsOpenAddStock] = React.useState(false)
  const [selectedProductId, setSelectedProductId] = React.useState(null)
  const [selectedProductToAddStock, setSelectedProductToAddStock] = React.useState(null)

  const handleDeleteProduct = (productId) => {
    setSelectedProductId(productId)
    setIsOpen(true)
  }

  const handleAfterDelete = () => {
    ProductDataService.getAllProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error mengambil produk setelah menghapus data:', error))

    setIsOpen(false) 
  }

  const handleAfterAddStock = () => {
    ProductDataService.getAllProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error mengambil produk setelah menambah stok:', error))

    setIsOpenAddStock(false) 
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductDataService.getAllProducts()
        setProducts(response.data)
      } catch (error) {
        console.error('Error mengambil produk:', error)
      }
    }

    fetchData()
  }, [])

  return (
  <>
    <PopUp 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      title="Apakah Anda yakin ingin menghapus produk ini?" 
      productId={selectedProductId} 
      onProductDeleted={handleAfterDelete} 
    />
    <AddStock isOpenAddStock={isOpenAddStock} setIsOpenAddStock={setIsOpenAddStock} productId={selectedProductToAddStock} onupdatedStock={handleAfterAddStock} />
    <div className="flex flex-col mt-8">
      {products.map((product) => (
        <div key={product.id} className="flex p-2 gap-x-6 mt-6 border border-gray-200 shadow-md rounded-md">
          <img src={product.image_path} className="w-1/4" alt={product.name} />
          <div className="flex flex-col gap-y-3 pt-2 w-full justify-center">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-blue-500">Rp {product.price}</p>
            <p className='text-gray-900 font-semibold text-sm'>Stock: {product.stock}</p>
            <div className="flex justify-end px-8 gap-x-4 my-2">
              <button onClick={() => {setSelectedProductToAddStock(product.id);setIsOpenAddStock(true)}} className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
                Tambahkan stock
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white p-2 rounded-md shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductList
