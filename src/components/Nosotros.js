// components/Nosotros.js
export default function Nosotros() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-8">Nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Misión</h3>
            <p className="text-gray-600">Proporcionar soluciones legales innovadoras con enfoque humano...</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Valores</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Integridad</li>
              <li>Excelencia</li>
              <li>Compromiso social</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}