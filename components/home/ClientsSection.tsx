import Image from "next/image";

const clients = [
  { name: "Tecnoplast", logo: "/logos/clients/tecnoplast.png" },
  { name: "Esmalglass-Itaca", logo: "/logos/clients/esmalglass.png" },
  { name: "Hospital Ana Nery", logo: "/logos/clients/hospital-ana-nery.png" },
  { name: "Wazer Tecnologia", logo: "/logos/clients/wazer.png" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-[#f1f1f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#363636] max-w-2xl mx-auto leading-relaxed">
            Alguns dos grandes parceiros que confiam na AccessIT para impulsionar
            sua TI e alcançar resultados extraordinários.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
