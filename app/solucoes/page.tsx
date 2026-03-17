import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções | AccessIT | Brasil",
  description:
    "Soluções estratégicas e personalizadas da AccessIT: Planejamento em TI, Venda de Equipamentos Dell/HP/Cisco, Importação, Licenciamento Microsoft/VMware e Extensão de Garantia.",
};

const WHATSAPP_URL = "https://wa.me/55489178492";

const solucoes = [
  {
    titulo: "Planejamento e Estratégia em TI",
    texto:
      "O Planejamento e Estratégia em TI da AccessIT é a etapa fundamental para garantir que nossas soluções sejam alinhadas aos objetivos da sua empresa. Antes de qualquer implementação, realizamos uma análise detalhada das suas necessidades, criando soluções personalizadas e estratégicas. Essa abordagem garante que nossas ações sejam sempre focadas em resultados concretos, otimizando a eficiência e o crescimento do seu negócio.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    titulo: "Venda de Equipamentos",
    texto:
      "Na AccessIT, você encontra uma linha completa de equipamentos de TI das melhores marcas como Dell, HP e Cisco, entre outras. Oferecemos servidores, storages, workstations, redes, notebooks e PCs de alta performance, com precisão econômica e suporte especializado. Nossa missão é garantir que cada equipamento atenda exatamente às necessidades do seu projeto, impulsionando o desempenho do seu negócio com soluções sob medida e custo-benefício ideal.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    titulo: "Importação de Tecnologias",
    texto:
      "Na AccessIT, trazemos ao seu negócio as mais avançadas soluções globais com nosso serviço de Importação de Tecnologia. Realizamos a importação de equipamentos e tecnologias específicas sob demanda, garantindo acesso a inovações exclusivas e alinhadas às suas necessidades. Com precisão logística e compromisso com cada etapa do processo, oferecemos soluções sob medida para impulsionar a eficiência e competitividade do seu projeto.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Licenciamento de Software",
    texto:
      "Na AccessIT, oferecemos soluções completas em Licenciamento de Software, com acesso direto às principais plataformas e tecnologias do mercado. Como parceiros de empresas como Microsoft, VMware e outras líderes, garantimos que sua empresa tenha as ferramentas ideais para operar com segurança, escalabilidade e compliance. Contamos com uma equipe especializada para orientar na escolha e gestão de licenças, otimizando custos e alinhando cada software às necessidades reais do seu negócio.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Extensão de Garantia",
    texto:
      "Na AccessIT, nossa solução de Extensão de Garantia traz a tranquilidade que seu negócio precisa para focar no crescimento, sabendo que seus equipamentos estão protegidos. Com cobertura adicional para servidores, storages, notebooks, PCs e até equipamentos descontinuados, oferecemos suporte contínuo e especializado. Em parceria com as maiores marcas, garantimos que sua infraestrutura opere com desempenho máximo e sem preocupações, evitando custos imprevistos e prolongando a vida útil de seus ativos.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function SolucoesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0072ae] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl">
            O que podemos fazer por você
          </h1>
          <p className="mt-5 text-base text-white/85 max-w-xl leading-relaxed">
            Soluções Estratégicas e Personalizadas para o Sucesso do Seu Negócio
            — Saiba mais ao longo desta página
          </p>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {solucoes.map((solucao, index) => (
              <div
                key={solucao.titulo}
                className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-start p-8 rounded-2xl border border-gray-100 hover:border-[#0072ae]/20 hover:shadow-md transition-all duration-200"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0072ae]/10 text-[#0072ae] flex items-center justify-center group-hover:bg-[#0072ae] group-hover:text-white transition-colors duration-200">
                    {solucao.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-xl font-bold text-[#0072ae] mb-3">
                    {solucao.titulo}
                  </h2>
                  <p className="text-sm text-[#4d4d4d] leading-relaxed">
                    {solucao.texto}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#ff7a33] text-[#ff7a33] font-bold text-xs uppercase tracking-wider hover:bg-[#ff7a33] hover:text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
