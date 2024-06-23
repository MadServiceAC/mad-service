import React from "react"
import imageSrc from "../../../assets/images/items1.png"
import PopUp from "../components/popup"

const BestSell = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <PopUp
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Hapus produk ini dari best seller?"
      />
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-bold mb-8">Best Seller</h2>
        <div className="flex gap-x-2">
          <div className="relative basis-5/6">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border border-gray-500 py-2.5 ps-2 pe-10 shadow-sm sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
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
            </div>
            <div className="flex items-center p-8">
              <button
                className="border-2 border-gray-600 p-1 rounded-md h-fit hover:bg-red-500 hover:text-white"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BestSell
