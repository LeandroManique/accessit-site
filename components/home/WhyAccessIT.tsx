const reasons = [
  {
    title: "Mais Resultados com Menos Desafios",
    text: "Na AccessIT, simplificamos a complexidade da TI. Oferecemos soluções inteligentes que economizam tempo, reduzem custos e eliminam barreiras, para que você possa focar no crescimento do seu negócio.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Tecnologia Sempre ao Seu Alcance",
    text: "Com acesso direto às melhores soluções do mercado, entregamos equipamentos, licenças e garantias de forma rápida e sem complicações. Nossa expertise garante que sua TI esteja sempre equipada para impulsionar sua performance.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Suporte que Faz a Diferença",
    text: "Cuidamos de tudo para que você tenha tranquilidade. Nosso suporte vai além da entrega, garantindo que sua infraestrutura de TI funcione de forma estável, segura e preparada para os desafios do dia a dia.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Parceria de Verdade, do Começo ao Fim",
    text: "Não somos apenas fornecedores, somos parceiros. Planejamos e gerimos sua TI com o objetivo de entregar soluções práticas, rentáveis e perfeitamente alinhadas às suas necessidades.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function WhyAccessIT() {
  return (
    <section id="por-que-accessit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0072ae]">
            Porque escolher a AccessIT?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-[#0072ae]/20 hover:shadow-md transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0072ae]/10 text-[#0072ae] flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#363636] text-base mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#4d4d4d] leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
