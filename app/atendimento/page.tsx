import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Atendimento AccessIT | AccessIT | Brasil",
  description:
    "Metodologia de atendimento AccessIT: do primeiro contato à entrega. Processo estruturado, transparente e orientado a resultados para sua empresa.",
};

const steps = [
  {
    number: "01",
    title: "Primeiro Contato e Identificação",
    text: "O cliente nos apresenta sua necessidade ou problema, seja presencialmente ou por uma reunião online.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Reunião de negócios — primeiro contato com o cliente",
  },
  {
    number: "02",
    title: "Análise Técnica",
    text: "Avaliamos a situação utilizando metodologias certificadas e ferramentas apropriadas para mapear as melhores soluções.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Análise técnica de dados e infraestrutura de TI",
  },
  {
    number: "03",
    title: "Solução Personalizada",
    text: "Desenvolvemos e apresentamos a solução ideal, incluindo orçamento detalhado e alinhado às necessidades do cliente.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Apresentação de solução personalizada ao cliente",
  },
  {
    number: "04",
    title: "Entrega e Implementação",
    text: "Realizamos a entrega personalizada e a implementação com suporte técnico completo para garantir o sucesso da solução.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Técnico realizando implementação de infraestrutura de TI",
  },
];

const depoimentos = [
  {
    nome: "Thais Fagundes",
    empresa: "BioCore Diagnósticos",
    texto:
      '"Com a Renata da AccessIT, finalmente conseguimos implementar novos equipamentos e softwares na clínica sem interrupções, tudo planejado e executado com muita organização e rapidez. Gratidão, amiga!"',
  },
  {
    nome: "Lucas Müller",
    empresa: "Proxima Manufatura",
    texto:
      '"A AccessIT tornou tudo mais acessível, explicando cada detalhe dos termos e apresentando as opções de equipamentos de forma clara e sem complicações."',
  },
  {
    nome: "Bruno Romano",
    empresa: "Luce Nera",
    texto:
      '"Desde o começo da minha empresa, a AccessIT tem sido uma parceira essencial. Em 2022, graças à proatividade da consultora, evitamos prejuízos que nossos equipamentos de TI estavam prestes a causar."',
  },
];

export default function AtendimentoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0072ae] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              METODOLOGIA DE ATENDIMENTO ACCESSIT
            </h1>
            <p className="mt-6 text-base text-white/85 leading-relaxed">
              Baseada em frameworks consolidados e práticas reconhecidas, nossa
              metodologia aplica análise estratégica e simplifica a complexidade
              da TI. Tornamos as soluções claras e acessíveis para facilitar a
              tomada de decisões, com total transparência em cada etapa do
              processo, garantindo eficiência operacional e resultados
              mensuráveis alinhados aos objetivos do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Passos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Step number badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#ff7a33] flex items-center justify-center shadow-lg">
                      <span className="text-white font-extrabold text-sm">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072ae]/10 text-[#0072ae] text-xs font-bold uppercase tracking-widest mb-5">
                    Etapa {step.number}
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#003b5c] mb-4 leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-[#4d4d4d] leading-relaxed text-base">
                    {step.text}
                  </p>
                  {/* Connector line (not on last step) */}
                  {index < steps.length - 1 && (
                    <div className="mt-8 flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#ff7a33]" />
                      <span className="text-xs text-[#4d4d4d]/60">Próxima etapa</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0072ae]">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep) => (
              <div
                key={dep.nome}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[#0072ae] text-4xl font-serif leading-none mb-4">"</div>
                <blockquote className="text-sm text-[#4d4d4d] leading-relaxed italic mb-6">
                  {dep.texto}
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#0072ae]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0072ae]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#363636] text-sm">{dep.nome}</p>
                    <p className="text-xs text-[#4d4d4d]">{dep.empresa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
