import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Password from "./Pages/Password";
import "./Pages/App.css"

function App() {
  const location = useLocation();

  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/forgot-password";

  return (
    <div className="App">
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Password/>}/>
      </Routes>

      {showNavbar && <Footer />}

    </div>
  );
}

export default App;
