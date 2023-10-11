import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Homebg from "./components/home-bg";
import About from "./routes/about";
import Services from "./routes/services";
import Contact from "./routes/contact";
import Navbar from "./components/NavBar";
import Home from "./routes/home";
import Signup from "./routes/Signup";

import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
    </div>
  );
}
