import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_TsCipTJn_LVdEDRvDhQ64cA1J7ZMr4S6j");
const POST = async (response) => {
  const body = await response.request.json();
  const { name, phone, email, descript, date } = body;
  const from = "Acme <onboarding@resend.dev>";
  if (!name || !phone || !email || !descript || !body || !date) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No se enviaron los datos necesarios.",
        data: null
      }),
      { status: 404, statusText: "No se enviaron los datos necesarios" }
    );
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
  const send = await resend.emails.send({
    from,
    to: email,
    subject: name,
    html
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Tu mensaje se envio correctamente.",
        data: send.data
      }),
      { status: 200, statusText: "OK" }
    );
  } else {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No se logro enviar, Verifique sus datos correctamente.",
        data: send.error
      }),
      { status: 500, statusText: "Error interno del servidor" }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
