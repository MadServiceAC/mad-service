import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, Routes, Link } from 'react-router-dom'
import Service from "./pages/user/pages/Service";

function App() {
   return (
      <div className="App">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Service/>} />
        </Routes>
      </div>
   );
}

export default App;
