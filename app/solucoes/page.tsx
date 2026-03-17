import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Soluções | AccessIT | Brasil",
  description:
    "Soluções estratégicas e personalizadas da AccessIT: Planejamento em TI, Venda de Equipamentos Dell/HP/Cisco, Importação, Licenciamento Microsoft/VMware e Extensão de Garantia.",
};

const WHATSAPP_URL = "https://wa.me/554891788492";

const solucoes = [
  {
    titulo: "Planejamento e Estratégia em TI",
    texto:
      "O Planejamento e Estratégia em TI da AccessIT é a etapa fundamental para garantir que nossas soluções sejam alinhadas aos objetivos da sua empresa. Antes de qualquer implementação, realizamos uma análise detalhada das suas necessidades, criando soluções personalizadas e estratégicas. Essa abordagem garante que nossas ações sejam sempre focadas em resultados concretos, otimizando a eficiência e o crescimento do seu negócio.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Análise de dados e planejamento estratégico de TI",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    titulo: "Venda de Equipamentos",
    texto:
      "Na AccessIT, você encontra uma linha completa de equipamentos de TI das melhores marcas como Dell, HP e Cisco, entre outras. Oferecemos servidores, storages, workstations, redes, notebooks e PCs de alta performance, com precisão econômica e suporte especializado. Nossa missão é garantir que cada equipamento atenda exatamente às necessidades do seu projeto, impulsionando o desempenho do seu negócio com soluções sob medida e custo-benefício ideal.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rack de servidores de alta performance Dell, HP e Cisco",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    titulo: "Importação de Tecnologias",
    texto:
      "Na AccessIT, trazemos ao seu negócio as mais avançadas soluções globais com nosso serviço de Importação de Tecnologia. Realizamos a importação de equipamentos e tecnologias específicas sob demanda, garantindo acesso a inovações exclusivas e alinhadas às suas necessidades. Com precisão logística e compromisso com cada etapa do processo, oferecemos soluções sob medida para impulsionar a eficiência e competitividade do seu projeto.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Conectividade global e importação de tecnologias",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Licenciamento de Software",
    texto:
      "Na AccessIT, oferecemos soluções completas em Licenciamento de Software, com acesso direto às principais plataformas e tecnologias do mercado. Como parceiros de empresas como Microsoft, VMware e outras líderes, garantimos que sua empresa tenha as ferramentas ideais para operar com segurança, escalabilidade e compliance. Contamos com uma equipe especializada para orientar na escolha e gestão de licenças, otimizando custos e alinhando cada software às necessidades reais do seu negócio.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Licenciamento de software e código de desenvolvimento",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Extensão de Garantia",
    texto:
      "Na AccessIT, nossa solução de Extensão de Garantia traz a tranquilidade que seu negócio precisa para focar no crescimento, sabendo que seus equipamentos estão protegidos. Com cobertura adicional para servidores, storages, notebooks, PCs e até equipamentos descontinuados, oferecemos suporte contínuo e especializado. Em parceria com as maiores marcas, garantimos que sua infraestrutura opere com desempenho máximo e sem preocupações, evitando custos imprevistos e prolongando a vida útil de seus ativos.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Infraestrutura tecnológica protegida com extensão de garantia",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="space-y-24">
            {solucoes.map((solucao, index) => (
              <div
                key={solucao.titulo}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <Image
                      src={solucao.image}
                      alt={solucao.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0072ae] text-white flex items-center justify-center flex-shrink-0">
                      {solucao.icon}
                    </div>
                    <span className="text-xs font-bold text-[#ff7a33] uppercase tracking-widest">
                      Solução {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#003b5c] mb-4 leading-tight">
                    {solucao.titulo}
                  </h2>
                  <p className="text-[#4d4d4d] leading-relaxed mb-7">
                    {solucao.texto}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff7a33] text-white font-bold text-sm hover:bg-[#c74600] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
