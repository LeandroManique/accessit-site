import Image from "next/image";

const partners = [
  { name: "Dell Technologies", logo: "/logos/partners/dell.svg" },
  { name: "Cisco", logo: "/logos/partners/cisco.svg" },
  { name: "Microsoft", logo: "/logos/partners/microsoft.svg" },
  { name: "Veeam", logo: "/logos/partners/veeam.svg" },
  { name: "HP", logo: "/logos/partners/hp.svg" },
  { name: "VMware by Broadcom", logo: "/logos/partners/vmware.svg" },
];

export default function TechPartnersLogos() {
  return (
    <section className="py-12 bg-[#f1f1f1] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-[#4d4d4d] uppercase tracking-widest mb-8">
          Parceiros Tecnológicos Oficiais
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              title={partner.name}
            >
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={120}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
