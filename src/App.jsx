import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, Routes } from 'react-router-dom'
import Service from "./pages/user/pages/Service"
import Shop from "./pages/user/pages/Shop"
import Forum from "./pages/user/pages/Forum"
import Blog from "./pages/user/pages/Blog"
import Contact from "./pages/user/pages/Contact"

function App() {
   return (
      <div className="App">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
   );
}

export default App;
