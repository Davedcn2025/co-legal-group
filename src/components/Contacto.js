// components/Contacto.js
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify form handling
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    }).then(() => alert("Mensaje enviado!"));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-8">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="w-full p-3 rounded border focus:border-[#D4AF37]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded border focus:border-[#D4AF37]"
                required
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                rows="4"
                className="w-full p-3 rounded border focus:border-[#D4AF37]"
                required
              />
              <button
                type="submit"
                className="bg-[#0D1B2A] text-white px-8 py-3 rounded hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition"
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Información</h3>
            <p className="mb-2">📍 Av. Principal #123, Ciudad de México</p>
            <p className="mb-2">📞 (55) 1234-5678</p>
            <a
              href="https://wa.me/521234567890"
              className="text-[#D4AF37] hover:underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
