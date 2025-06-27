import { useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Soluciones Legales Integrales",
      subtitle: "Tu derecho, nuestra causa.",
    },
    // Elimina el segundo slide para probar
  ];

  return (
    <div className="bg-[#0D1B2A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{slides[0].title}</h1>
        <p className="text-xl mb-8">{slides[0].subtitle}</p>
        <button className="bg-[#D4AF37] text-[#0D1B2A] px-8 py-3 rounded-md font-bold">
          Agenda tu consulta
        </button>
      </div>
    </div>
  );
}
