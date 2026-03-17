"use client";

import { useState } from "react";

export default function DiagnosticoForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", telefone: "", email: "", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0072ae] leading-tight">
              Diagnóstico Gratuito de TI
            </h2>
            <p className="mt-5 text-base text-[#4d4d4d] leading-relaxed">
              Descubra se sua infraestrutura de TI está pronta para os desafios
              do mercado. Cadastre-se para agendar um diagnóstico técnico com
              nossos especialistas.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Análise completa da sua infraestrutura atual",
                "Identificação de gargalos e pontos de melhoria",
                "Recomendações personalizadas para o seu negócio",
                "Sem compromisso e 100% gratuito",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#ff7a33] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#4d4d4d]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f1f1f1] rounded-3xl p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#363636] mb-2">Recebemos seu contato!</h3>
                <p className="text-[#4d4d4d] text-sm">
                  Nossa equipe entrará em contato em breve para agendar seu diagnóstico gratuito.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#363636] mb-1.5">
                    Nome <span className="text-[#ff7a33]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#363636] text-sm focus:outline-none focus:border-[#0072ae] focus:ring-2 focus:ring-[#0072ae]/20 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#363636] mb-1.5">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#363636] text-sm focus:outline-none focus:border-[#0072ae] focus:ring-2 focus:ring-[#0072ae]/20 transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#363636] mb-1.5">
                    E-mail <span className="text-[#ff7a33]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#363636] text-sm focus:outline-none focus:border-[#0072ae] focus:ring-2 focus:ring-[#0072ae]/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#363636] mb-1.5">
                    Como podemos te ajudar?
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#363636] text-sm focus:outline-none focus:border-[#0072ae] focus:ring-2 focus:ring-[#0072ae]/20 transition-all resize-none"
                    placeholder="Descreva brevemente sua situação ou necessidade..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl bg-[#ff7a33] text-white font-bold text-sm hover:bg-[#c74600] disabled:opacity-60 transition-colors duration-200"
                >
                  {status === "loading" ? "Enviando..." : "Enviar formulário"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
