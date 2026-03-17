import Image from "next/image";

const partners = [
  { name: "Dell Technologies", logo: "/logos/partners/dell.svg" },
  { name: "Cisco", logo: "/logos/partners/cisco.svg" },
  { name: "Microsoft", logo: "/logos/partners/microsoft.svg" },
  { name: "Veeam", logo: "/logos/partners/veeam.svg" },
  { name: "HP", logo: "/logos/partners/hp.svg" },
  { name: "VMware by Broadcom", logo: "/logos/partners/vmware.svg" },
];

// Duplicated for seamless infinite loop
const track = [...partners, ...partners];

export default function TechPartnersLogos() {
  return (
    <section className="py-12 bg-[#f1f1f1] border-y border-gray-200 overflow-hidden">
      <p className="text-center text-xs font-semibold text-[#4d4d4d] uppercase tracking-widest mb-8">
        Parceiros Tecnológicos Oficiais
      </p>

      {/* Marquee track */}
      <div className="animate-marquee-track relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f1f1f1, transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f1f1f1, transparent)" }} />

        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {track.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              title={partner.name}
            >
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={120}
                height={50}
                className="h-10 w-auto object-contain max-w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
