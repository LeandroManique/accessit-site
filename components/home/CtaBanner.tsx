const WHATSAPP_URL = "https://wa.me/554891788492";

interface CtaBannerProps {
  variant?: "orange" | "blue";
  title: string;
  subtitle: string;
  ctaLabel: string;
}

export default function CtaBanner({
  variant = "orange",
  title,
  subtitle,
  ctaLabel,
}: CtaBannerProps) {
  const isOrange = variant === "orange";

  return (
    <section
      className={`py-16 ${isOrange ? "bg-[#ff7a33]" : "bg-[#0072ae]"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 shadow-lg ${
            isOrange
              ? "bg-white text-[#ff7a33] hover:bg-gray-100"
              : "bg-white text-[#0072ae] hover:bg-gray-100"
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
