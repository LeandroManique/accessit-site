import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AccessIT | Brasil - Equipamentos de TI",
  description:
    "Planejamos, Fornecemos & Gerimos TI. Transformamos sua TI em vantagem competitiva e estratégica para resultados reais e sustentáveis.",
  keywords:
    "TI, equipamentos de TI, Dell, Microsoft, Cisco, servidores, licenciamento, suporte TI, Santa Maria RS, São José SC",
  openGraph: {
    title: "AccessIT | Brasil - Equipamentos de TI",
    description:
      "Planejamos, Fornecemos & Gerimos TI. Soluções tecnológicas personalizadas para empresas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
