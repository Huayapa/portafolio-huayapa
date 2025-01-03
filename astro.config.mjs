// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: "/",
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: "server",
        access: "secret",
        startsWith: "re_"
      }),
      DOMAIN_URL: envField.string({
        context: "server",
        access: "secret",
      }),
    }
  },
  output: "server",
});
