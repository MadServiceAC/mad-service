import React from "react"
import AuthService from "../../svc/auth.svc"
import UserService from "../../svc/user.svc"
import Sections from "../../components/sections"
import Sidebar from "./components/sidebar"
import Pesanan from "./pages/pesanan"
import Penghasilan from "./pages/penghasilan"
import Produk from "./pages/produk"
import BestSell from "./pages/bestsell"
import TopSell from "./pages/topsell"


const tabs = [
    {id: 1, title: 'Pesanan', cont: <Pesanan />},
    {id: 2, title: 'Penghasilan', cont: <Penghasilan />},
    {id: 3, title: 'Produk', cont: <Produk />},
    {id: 4, title: 'Best Seller', cont: <BestSell />},
    {id: 5, title: 'Top Seller', cont: <TopSell />}
]

function SellerBoard() {
  const isLogin = AuthService.getCurrentUser()?.roles?.some(role => role === "ROLE_SELLER") || null
  const [content, setContent] = React.useState("")
  const [activeTab, setActiveTab] = React.useState(1)

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.cont

  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  React.useEffect(() => {
    UserService.getSellerBoard()
      .then((response) => setContent(response.data))
      .catch((error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        )
      })
  }, [])

  return(
    <div className="pt-10">
    {isLogin ? (     
        <Sections className="py-16 mb-auto max-w-8xl lg:mt-12">
          <div className="flex mx-auto container gap-x-6">
            <div className="w-1/4">
            <Sidebar
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={handleTabClick}
            />
            </div>
            <div className="w-3/4">
             {activeTabContent}
            </div>
          </div>
        </Sections>
      
    ) : (
        <header>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h3>{content}</h3>
          </div>
        </header>
    )}
    </div>
  )

  
}

export default SellerBoard