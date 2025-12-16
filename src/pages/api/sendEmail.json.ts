export const runtime = 'nodejs';
import type {APIRoute} from "astro"
import { Resend } from "resend";
// LLAVE
const resend = new Resend(import.meta.env.RESEND_API_KEY);
// export const prerender = false
// PETICION
export const POST:APIRoute = async (response) => {
  // Datos que se tomaran por POST del contacto
  const body =  await response.request.json();
  const {name, phone, email, descript, date} = body;
  const from = "Acme <onboarding@resend.dev>";
  // Verificar que los datos no esten vacios antes de enviarlos
  if(!name || !phone || !email || !descript || !body || !date) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No se enviaron los datos necesarios.",
        data: null,
      }),{status: 404, statusText: "No se enviaron los datos necesarios"}
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
  const send = await resend.emails.send({
    from, 
    to: email, 
    subject: name, 
    html: html
  });
  // DATOS QUE SE ENVIARAN SI EL ENVIO FUE EXITOSO O NO
  if(send.data) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Tu mensaje se envio correctamente.",
        data: send.data,
      }),{status: 200, statusText: "OK"}
    )
  } else {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No se logro enviar, Verifique sus datos correctamente.",
        data: send.error,
      }),{status: 500, statusText: "Error interno del servidor"}
    )
  }
}