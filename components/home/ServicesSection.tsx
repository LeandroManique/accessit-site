const services = [
  {
    title: "Planejamos",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    text: "Na AccessIT, a inteligência está no centro de tudo o que fazemos. Por meio de um método estratégico e preciso, entendemos as necessidades do cliente em profundidade e conectamos cada solução tecnológica às metas do negócio. Para o cliente, o processo é simples e eficiente, mas por trás disso, está nosso cuidado em alinhar cada detalhe para entregar resultados que fazem a diferença. Com planejamento bem fundamentado, ajudamos empresas a transformar TI em uma ferramenta estratégica, sempre de forma prática e objetiva.",
  },
  {
    title: "Fornecemos",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    text: "Conectar sua empresa às melhores tecnologias do mercado nunca foi tão fácil. Na AccessIT, fornecemos equipamentos, softwares e licenças das principais marcas globais, como Dell e Microsoft, sempre com foco em personalização e qualidade. Cada etapa, desde a escolha das soluções até a entrega, é pensada para garantir o melhor desempenho e a maior eficiência. Nossa expertise em importação também garante acesso a tecnologias exclusivas, atendendo às demandas específicas de forma ágil e sem complicações.",
  },
  {
    title: "Gerimos",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Cuidar da TI dos nossos clientes faz parte do nosso compromisso contínuo. Além das garantias estendidas e soluções fornecidas, atuamos com uma gestão de contas que oferece suporte técnico eficiente e acompanhamento proativo. Nosso foco é manter a operação estável e minimizar possíveis interrupções, sempre garantindo que a tecnologia entregue atenda plenamente às expectativas do cliente. Dessa forma, proporcionamos segurança e previsibilidade, para que o cliente possa focar em seus objetivos, com a confiança de que a TI está em boas mãos.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0072ae]">
            Soluções de TI que Impulsionam
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-[#f1f1f1] rounded-2xl p-8 hover:bg-[#0072ae] transition-all duration-300 cursor-default"
            >
              <div className="text-[#0072ae] group-hover:text-white transition-colors mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#363636] group-hover:text-white transition-colors mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-[#4d4d4d] group-hover:text-white/85 transition-colors leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
