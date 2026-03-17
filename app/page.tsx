import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TechPartnersLogos from "@/components/home/TechPartnersLogos";
import CeoQuote from "@/components/home/CeoQuote";
import WhyAccessIT from "@/components/home/WhyAccessIT";
import CtaBanner from "@/components/home/CtaBanner";
import ClientsSection from "@/components/home/ClientsSection";
import DiagnosticoForm from "@/components/home/DiagnosticoForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TechPartnersLogos />
      <CeoQuote />
      <WhyAccessIT />
      <CtaBanner
        variant="orange"
        title="Quer ter controle total sobre sua TI e acelerar decisões estratégicas?"
        subtitle="Transforme tecnologia em resultados. Oferecemos soluções personalizadas que elevam a eficiência, reduzem custos e geram vantagem competitiva para a sua empresa."
        ctaLabel="Comece hoje mesmo - Vamos conversar!"
      />
      <ClientsSection />
      <CtaBanner
        variant="blue"
        title="Transforme sua TI com soluções inteligentes e suporte especializado."
        subtitle="Elimine gargalos, ganhe eficiência operacional e transforme tecnologia em resultados consistentes com soluções práticas e sob medida."
        ctaLabel="Fale agora mesmo com o especialista"
      />
      <DiagnosticoForm />
    </>
  );
}
