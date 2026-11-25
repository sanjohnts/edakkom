import type { Config } from "@react-router/dev/config";

// Static site: every page is rendered to HTML at build time, so search
// engines and WhatsApp/Facebook link previews see the full content.
// Output goes to build/client, which Vercel serves (see ../vercel.json).
export default {
  ssr: false,
  prerender: ["/", "/en"],
} satisfies Config;
