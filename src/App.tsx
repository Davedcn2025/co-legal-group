import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AreasPractica from "./components/AreasPractica";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Store from "./components/Store";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/areas" element={<AreasPractica />} />
          <Route path="/tienda" element={<Store />} /> {/* ✅ Sin duplicados */}
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
