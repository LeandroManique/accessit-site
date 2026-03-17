export default function CeoQuote() {
  return (
    <section className="py-20 bg-[#003b5c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote icon */}
        <svg
          className="w-12 h-12 text-[#ff7a33] mx-auto mb-8 opacity-80"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
        </svg>

        <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-relaxed italic">
          "Na AccessIT, somos movidos pelo compromisso de criar soluções
          tecnológicas personalizadas que transformam desafios em resultados
          extraordinários. Nosso foco é impulsionar seu crescimento contínuo,
          assegurando que cada passo da sua jornada seja marcado por evolução e
          sucesso."
        </blockquote>

        <div className="mt-8">
          <div className="w-16 h-0.5 bg-[#ff7a33] mx-auto mb-4" />
          <p className="text-white font-semibold text-base">
            Fernando Arrojo
          </p>
          <p className="text-white/60 text-sm mt-1">CEO &amp; Fundador — AccessIT</p>
        </div>
      </div>
    </section>
  );
}
