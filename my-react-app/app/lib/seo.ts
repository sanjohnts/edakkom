import { copy, SITE_URL, type Lang } from "~/content";

const urls: Record<Lang, string> = {
  ml: `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
};

// Page <head> tags for the home page in either language:
// title, description, share previews, language alternates and structured data.
export function homeMeta(lang: Lang) {
  const t = copy[lang].meta;
  const image = `${SITE_URL}/images/og-edakkom.png`;
  return [
    { title: t.title },
    { name: "description", content: t.description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "edakkom.com" },
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.description },
    { property: "og:url", content: urls[lang] },
    { property: "og:locale", content: t.locale },
    { property: "og:locale:alternate", content: lang === "ml" ? "en_IN" : "ml_IN" },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: "Illustration of hills, coconut palms, paddy fields and a river in North Malabar",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: urls[lang] },
    { tagName: "link", rel: "alternate", hrefLang: "ml", href: urls.ml },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: urls.en },
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: urls.ml },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: "edakkom.com",
            alternateName: ["Edakkom", "എടക്കോം"],
            inLanguage: ["ml", "en"],
            description: copy.en.meta.description,
          },
          {
            "@type": "Place",
            "@id": `${SITE_URL}/#edakkom`,
            name: "Edakkom",
            alternateName: "എടക്കോം",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Edakkom",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Kannur district, Kerala, India",
            },
          },
        ],
      },
    },
  ];
}
