import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, Routes, Link } from 'react-router-dom'

function App() {
   return (
      <div className="App">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
   );
}

export default App;
