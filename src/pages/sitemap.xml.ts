import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const pages = [
    "",
    "about",
    "projects",
    "contact",
  ];

  const urls = pages
    .map((p) => `<url><loc>${site}${p}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/0.9">
${urls}
</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
};