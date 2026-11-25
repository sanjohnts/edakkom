import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/noto-sans-malayalam/400.css";
import "@fontsource/noto-sans-malayalam/500.css";
import "@fontsource/noto-sans-malayalam/600.css";
import "@fontsource/noto-serif-malayalam/600.css";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
];

// Malayalam lives at /, English under /en.
function useLang() {
  const { pathname } = useLocation();
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ml";
}

export function Layout({ children }: { children: React.ReactNode }) {
  const lang = useLang();
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14332A" />
        <script
          // Lets CSS hide scroll-reveal content only when JavaScript is running.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-deep px-6 text-center text-cream">
      <p className="text-sm font-semibold text-gold-soft">{notFound ? "404" : "Error"}</p>
      <h1 className="mt-3 font-display text-3xl font-semibold">
        {notFound ? "ഈ പേജ് കണ്ടെത്താനായില്ല · Page not found" : "എന്തോ പിഴവ് സംഭവിച്ചു · Something went wrong"}
      </h1>
      <a href="/" className="mt-8 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep">
        എടക്കോം · Edakkom
      </a>
    </main>
  );
}
