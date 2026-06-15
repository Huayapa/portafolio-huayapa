export const runtime = 'nodejs';
import type {APIRoute} from "astro"
import { Resend } from "resend";
// LLAVE
const resend = new Resend(import.meta.env.RESEND_API_KEY);
// export const prerender = false
// PETICION
export const POST:APIRoute = async ({request}) => {
  try {
    // Datos que se tomaran por POST del contacto
    const body =  await request.json();
    const {name, phone, email, descript, date} = body;
    const from = "Acme <onboarding@resend.dev>";
    // Verificar que los datos no esten vacios antes de enviarlos
    if(!name || !phone || !email || !descript || !date) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "No se enviaron los datos necesarios.",
          data: null,
        }),{status: 400, headers: { 'Content-Type': 'application/json' }}
      )
    }
    const html = `
      <h2>${name}</h2>
      <p>Numero Telefonico: <strong>${phone}</strong></p>
      <p><strong>Mensaje:</strong>
      ${descript}
      </p>
      <h3>Datos</h3>
      <ul>
      <li>${name}</li>
      <li>${phone}</li>
      <li>${email}</li>
      <li>${descript}</li>
      <li>${date}</li>
    </ul>
    `;
    // Datos que se enviaran al resend
    const { data, error } = await resend.emails.send({
      from, 
      to: 'contactohuayapa@gmail.com', 
      subject: name, 
      html: html
    });
    if(error) {
      console.error("Error de Resend:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "No se logro enviar, Verifique sus datos correctamente.",
          data: error,
        }),{status: 400, headers: { 'Content-Type': 'application/json' }}
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Tu mensaje se envio correctamente.",
        data: data,
      }),{status: 200, headers: { 'Content-Type': 'application/json' }}
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error inesperado en el servidor.",
        data: null,
      }),{status: 500, headers: { 'Content-Type': 'application/json' }}
    )
  }
}