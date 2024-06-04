import React from 'react'
import imageSrc from '../../../assets/images/items1.png'
import PopUp from '../components/popup'

const Produk = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title="Apakah anda yakin menghapus produk ini?"/>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-bold mb-8">Product</h2>
        <div className="flex gap-x-2">
          <div className="relative basis-5/6">
            <label htmlFor="Search" className="sr-only">Search</label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border border-gray-500 py-2.5 ps-2 pe-10 shadow-sm sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" className="text-gray-600 hover:text-gray-700">
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
          <button className="bg-blue-500 basis-1/6 flex justify-center items-center text-white gap-x-2 rounded-md">
            Tambah
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex p-2 gap-x-6 mt-6 border border-gray-200 shadow-md">
            <img src={imageSrc} className="w-1/4" alt="item 1" />
            <div className="flex flex-col gap-y-3 pt-2 w-full justify-center">
              <h3 className="font-semibold">
                DAIKIN AC Split FTC-15 / FTC15 1/2 PK Standard (Thailand)
              </h3>
              <p className="text-blue-500">Rp 4.299.000</p>
              <div className="flex justify-end px-8 gap-x-4">
                <button className="bg-green-500 text-white p-2 rounded-md shadow-md">
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button onClick={() => setIsOpen(true)} className="bg-red-500 text-white p-2 rounded-md shadow-md">
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
        </div>
      </div>
    </>
  )
}

export default Produk
