import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nome, telefone, email, mensagem } = await req.json();

    if (!nome || !email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Site AccessIT <onboarding@resend.dev>",
      to: ["cadastro@accessit.com.br"],
      replyTo: email,
      subject: `Novo Diagnóstico Gratuito de TI — ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0072ae; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Novo contato — Diagnóstico Gratuito de TI</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #363636; width: 140px;">Nome:</td>
                <td style="padding: 8px 0; color: #4d4d4d;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #363636;">E-mail:</td>
                <td style="padding: 8px 0; color: #4d4d4d;"><a href="mailto:${email}" style="color: #0072ae;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #363636;">Telefone:</td>
                <td style="padding: 8px 0; color: #4d4d4d;">${telefone || "Não informado"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #363636; vertical-align: top;">Mensagem:</td>
                <td style="padding: 8px 0; color: #4d4d4d;">${mensagem || "Não informada"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fff3e0; border-radius: 6px; border-left: 4px solid #ff7a33;">
              <p style="margin: 0; font-size: 13px; color: #c74600;">
                Responda diretamente a este e-mail para contatar o cliente, ou use os dados acima.
              </p>
            </div>
          </div>
          <p style="text-align: center; color: #999; font-size: 11px; margin-top: 16px;">
            Enviado via site AccessIT | Brasil
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
