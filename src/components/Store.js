// components/Store.js (nuevo componente)
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Store() {
  const [products] = useState([
    {
      id: 1,
      name: "Contrato de Arrendamiento",
      price: 1500,
      description: "Documento legal para acuerdos de arrendamiento",
    },
    {
      id: 2,
      name: "Consulta Legal Express",
      price: 800,
      description: "Asesoría legal de 30 minutos",
    },
    {
      id: 3,
      name: "Poder Notarial",
      price: 2000,
      description: "Documento legal para representación",
    },
  ]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-12">
          Tienda de Servicios Legales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-[#D4AF37] mb-4">
                ${product.price} MXN
              </p>

              <PayPalScriptProvider
                options={{
                  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                  currency: "MXN",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: product.price.toString(),
                            currency_code: "MXN",
                          },
                          description: product.description,
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    alert(`¡Pago completado! ID de transacción: ${order.id}`);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
