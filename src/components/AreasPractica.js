// components/AreasPractica.js
export default function AreasPractica() {
  const areas = [
    { title: "Derecho Penal", desc: "Justicia para adolescentes y adultos" },
    { title: "Derecho Civil", desc: "Contratos, propiedad y familia" },
    { title: "Derecho Familiar", desc: "Divorcios y custodias" },
    { title: "Derecho Corporativo", desc: "Empresas y negocios" },
    {
      title: "Derecho Laboral",
      desc: "Individual (despidos injustificados, convenios, etc.)y colectivos",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-12">
          Áreas de Práctica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
