import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nós | AccessIT | Brasil",
  description:
    "Conheça a AccessIT: 8 anos de experiência em soluções de TI, fundada por Fernando Arrojo. Planejamos, Fornecemos e Gerimos TI com inteligência e estratégia.",
};

const valores = [
  {
    label: "Inteligência",
    text: "Compreender as necessidades estratégicas do cliente e oferecer soluções tecnológicas alinhadas aos seus objetivos.",
  },
  {
    label: "Performance",
    text: "Garantir que todas as soluções oferecidas tragam resultados eficientes e otimizados para o negócio.",
  },
  {
    label: "Estratégia",
    text: "Sempre pensar a longo prazo, entregando soluções que agreguem valor contínuo e sustentável para nossos clientes.",
  },
  {
    label: "Transparência",
    text: "Agir com clareza e honestidade em todas as etapas, construindo uma relação de confiança.",
  },
  {
    label: "Compromisso",
    text: "Estar presente como parceiro de longo prazo, assegurando o sucesso e crescimento de nossos clientes.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero CEO */}
      <section className="bg-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Foto CEO */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-[#0072ae] opacity-20 rotate-3" />
                <Image
                  src="/images/ceo-fernando-arrojo.jpg"
                  alt="Fernando Arrojo — CEO e Fundador da AccessIT, no congresso Dell em Las Vegas"
                  width={340}
                  height={440}
                  className="relative rounded-2xl object-cover shadow-xl w-full max-w-xs lg:max-w-sm"
                  priority
                />
              </div>
            </div>

            {/* Quote */}
            <div>
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#ff7a33] opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>
              <blockquote className="text-lg text-[#363636] leading-relaxed italic">
                "Quando fundei a AccessIT, meu objetivo era ir além da simples
                venda de equipamentos e soluções de TI. Queria oferecer algo mais:
                um atendimento personalizado e soluções integradas que realmente
                ajudassem as empresas a crescer e se destacar em um mercado cada
                vez mais competitivo. Com mais de 15 anos de experiência no setor
                e 8 anos de trajetória da AccessIT, mantenho o compromisso de ser
                mais do que um fornecedor, mas um verdadeiro parceiro estratégico,
                entregando não apenas tecnologia, mas resultados concretos e
                sustentáveis para nossos clientes."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#ff7a33]" />
                <div>
                  <p className="font-bold text-[#0072ae]">Fernando Arrojo</p>
                  <p className="text-sm text-[#4d4d4d]">CEO e Fundador da AccessIT</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-[#4d4d4d] italic">
                Saiba mais ao longo desta página!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós — conteúdo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-[#0072ae] mb-8">Sobre Nós</h1>

          <p className="text-base text-[#4d4d4d] leading-relaxed mb-10">
            Fundada há 8 anos, a AccessIT se destaca por sua abordagem única e
            especializada em soluções de TI. Nossa equipe multidisciplinar, que
            combina diversas expertises e uma longa trajetória de experiência no
            setor, está preparada para atender às necessidades tecnológicas de
            empresas de todos os portes, sempre garantindo inteligência,
            performance e estratégia em cada solução.
          </p>

          {/* O que nos diferencia */}
          <div className="mb-10 p-8 bg-[#f1f1f1] rounded-2xl border-l-4 border-[#0072ae]">
            <h2 className="text-lg font-bold text-[#0072ae] mb-3">O que nos diferencia:</h2>
            <p className="text-base text-[#4d4d4d] leading-relaxed">
              Nosso diferencial está no cuidado e atenção que dedicamos a cada
              cliente. Desde o primeiro contato, você será atendido por um gerente
              de contas dedicado, que atua como um parceiro estratégico,
              garantindo eficácia e transparência em todas as etapas do processo.
              Esse acompanhamento contínuo fortalece nossa parceria de longo prazo,
              fazendo da AccessIT não apenas um fornecedor, mas um aliado no
              crescimento e sucesso do seu negócio.
            </p>
          </div>

          {/* Missão */}
          <div className="mb-10 p-8 bg-[#0072ae] rounded-2xl">
            <h2 className="text-lg font-bold text-white mb-3">Nossa missão:</h2>
            <p className="text-white/90 leading-relaxed">
              Combinamos planejamento estratégico, fornecimento de soluções de TI
              de ponta e gestão contínua para transformar a tecnologia em um
              verdadeiro diferencial competitivo para os nossos clientes.
            </p>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-lg font-bold text-[#363636] mb-6">Nossos valores:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valores.map((v) => (
                <div
                  key={v.label}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#0072ae]/30 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff7a33]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#ff7a33]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0072ae] text-sm mb-1">{v.label}</p>
                    <p className="text-sm text-[#4d4d4d] leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-14 text-center">
            <p className="text-xl font-bold text-[#0072ae]">
              Planejamos, Fornecemos e Gerimos TI com Inteligência e Estratégia
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
