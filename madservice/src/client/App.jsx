import React, {Component} from "react"
import { Route, Routes, Link } from "react-router-dom"
import AuthService from "./svc/auth.svc"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Home from "./pages/home"
import BoardUser from "./pages/user/profile"
import BoardSeller from "./pages/seller/seller"
import BoardTechnician from "./pages/technician/technician"
import BoardAdmin from "./pages/admin/admin"
import Profile from "./pages/user/profile"
import logo from "./assets/images/logo.png"
import Contact from "./pages/contact"
import NotFound from "./pages/notfound"
import Service from "./pages/service"
import Shop from "./pages/shop"
import Blog from "./pages/blog"
import Forum from "./pages/forum"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)

    this.state = {
      showSellerBoard: false,
      showTechnicianBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      dropdownVisible: false,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      dropdownVisible: !prevState.dropdownVisible,
    }))
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser()

    if (user) {
      this.setState({
        currentUser: user,
        showSellerBoard: user?.roles?.includes("ROLE_SELLER"),
        showAdminBoard: user?.roles?.includes("ROLE_ADMIN"),
        showTechnicianBoard: user?.roles?.includes("ROLE_TECHNICIAN")
      })
    }
  }

  logOut() {
    AuthService.logout()
    this.setState({
      showSellerBoard: false,
      showTechnicianBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    })
  }

  render() {
    const {currentUser, showAdminBoard, showSellerBoard, showTechnicianBoard} = this.state

    return (
      <>
        <nav className="bg-gray-100 flex justify-between w-full fixed items-center py-4 px-8 rounded-b-2xl shadow-md z-10">
          <Link to={"/"} className="flex items-center cursor-pointer">
            <img src={logo} className="h-10" alt="Mad service" />
          </Link>
          <div className="flex space-x-8 list-none items-center">
            {showTechnicianBoard && (
              <li>
                <Link to={"/technician"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                  Dashboard
                </Link>
              </li>
            )}

            {showSellerBoard && (
              <li>
                <Link to={"/seller"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                  Dashboard
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li>
                <Link to={"/admin"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                  Dashboard
                </Link>
              </li>
            )}

            <li>
              <Link to={"/service"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                Service
              </Link>
            </li>

            <li>
              <Link to={"/shop"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                Shop
              </Link>
            </li>

            <li>
              <Link to={"/blog"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                Blog
              </Link>
            </li>

            <li>
              <Link to={"/contact"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                Contact
              </Link>
            </li>

              <li>
                <Link to={"/forum"} className="text-gray-800 font-bold hover:text-blue-500 cursor-pointer">
                  Forum
                </Link>
              </li>

            
            {currentUser ? (
            <>
              <li className="bg-blue-600 p-2 rounded-full relative hover:bg-blue-700 ms-10">
                <button className="items-center justify-center flex" onClick={this.toggleDropdown}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 1.5c-2.66 0-8 1.34-8 4v1.5h16v-1.5c0-2.66-5.34-4-8-4z"
                    />
                  </svg>
                </button>
                {this.state.dropdownVisible && (
                  <div className="absolute right-0 mt-6 w-48 bg-gray-50 rounded-md shadow-lg z-50 p-2">
                    <Link to="/profile" className="block px-5 py-3 text-sm text-gray-900 hover:bg-gray-100">
                      Profile
                    </Link>
                    <a
                      href="/login"
                      className="block px-5 py-3 text-sm text-gray-900 hover:bg-gray-100"
                      onClick={this.logOut}
                    >
                      Log Out
                    </a>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <span className='hidden w-px h-6 bg-gray-400 md:block'></span>
              <li>
                <Link to={"/login"} className="block py-1.5 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                  Login
                </Link>
              </li>
            </>
          )}
          </div>

        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog/>} />
            {currentUser && <Route path="/forum" element={<Forum/>} />}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {currentUser && <Route path="/profile" element={<Profile />} />}
            <Route path="/user" element={<BoardUser />} />
            <Route path="/technician" element={<BoardTechnician/>}/>
            <Route path="/seller" element={<BoardSeller />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    )
  }
}