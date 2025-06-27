import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-12 w-auto"
              src="/assets/logo.png"
              alt="CO Legal Group"
            />
            <span className="ml-2 text-xl font-bold text-[#0D1B2A]">
              CO LEGAL GROUP
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Inicio", "Áreas", "Nosotros", "Contacto"].map((item) => (
              <Link
                key={item}
                to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                className="text-[#0D1B2A] hover:text-[#D4AF37] px-3 py-2"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
