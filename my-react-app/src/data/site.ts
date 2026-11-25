import type { L } from '../lib/i18n';

/**
 * How sure we are about a fact or photo. Shown as a small badge so readers
 * always know what is confirmed and what still needs local checking.
 */
export type Status = 'verified' | 'directory' | 'to-verify' | 'reference' | 'context';

export const STATUS_LABEL: Record<Status, L> = {
  verified: { en: 'Verified', ml: 'സ്ഥിരീകരിച്ചത്' },
  directory: { en: 'From public listings', ml: 'പൊതു ലിസ്റ്റിങ്ങിൽ നിന്ന്' },
  'to-verify': { en: 'To be confirmed', ml: 'സ്ഥിരീകരിക്കാനുണ്ട്' },
  reference: { en: 'Reference photo', ml: 'മാതൃകാ ചിത്രം' },
  context: { en: 'Regional history', ml: 'പ്രാദേശിക ചരിത്രം' },
};

export const STATUS_HELP: Record<Status, L> = {
  verified: { en: 'Confirmed from an official source.', ml: 'ഔദ്യോഗിക സ്രോതസ്സിൽ നിന്ന് സ്ഥിരീകരിച്ചത്.' },
  directory: {
    en: 'Taken from public directory listings — please help us confirm it.',
    ml: 'പൊതു ഡയറക്ടറി ലിസ്റ്റിങ്ങുകളിൽ നിന്ന് — സ്ഥിരീകരിക്കാൻ സഹായിക്കൂ.',
  },
  'to-verify': {
    en: 'Needs confirmation from local records or elders.',
    ml: 'പ്രാദേശിക രേഖകളിൽ നിന്നോ മുതിർന്നവരിൽ നിന്നോ സ്ഥിരീകരിക്കേണ്ടതുണ്ട്.',
  },
  reference: {
    en: 'A representative photo of North Malabar / Kerala — not confirmed as taken in Edakkom.',
    ml: 'ഉത്തര മലബാറിന്റെ / കേരളത്തിന്റെ മാതൃകാ ചിത്രം — എടക്കോമിൽ നിന്നെടുത്തതായി സ്ഥിരീകരിച്ചിട്ടില്ല.',
  },
  context: {
    en: 'Well-documented history of Kerala / Malabar that shaped Edakkom.',
    ml: 'എടക്കോമിനെ രൂപപ്പെടുത്തിയ കേരള / മലബാർ ചരിത്രം.',
  },
};

export type NavItem = { path: string; label: L; blurb: L; no: string };

export const NAV: NavItem[] = [
  { no: '01', path: '/', label: { en: 'Introduction', ml: 'ആമുഖം' }, blurb: { en: 'The village at a glance', ml: 'ഗ്രാമം ഒറ്റനോട്ടത്തിൽ' } },
  { no: '02', path: '/history', label: { en: 'History', ml: 'ചരിത്രം' }, blurb: { en: 'Origins and important events', ml: 'ഉത്ഭവവും പ്രധാന സംഭവങ്ങളും' } },
  { no: '03', path: '/timeline', label: { en: 'Timeline', ml: 'കാലരേഖ' }, blurb: { en: 'Year by year', ml: 'വർഷം തോറും' } },
  { no: '04', path: '/geography', label: { en: 'Geography & Map', ml: 'ഭൂമിശാസ്ത്രം' }, blurb: { en: 'Location, rivers, nearby places', ml: 'സ്ഥാനം, പുഴകൾ, അയൽഗ്രാമങ്ങൾ' } },
  { no: '05', path: '/culture', label: { en: 'Culture & Tradition', ml: 'സംസ്കാരം' }, blurb: { en: 'Theyyam, festivals, food', ml: 'തെയ്യം, ഉത്സവങ്ങൾ, ഭക്ഷണം' } },
  { no: '06', path: '/religious-places', label: { en: 'Religious Places', ml: 'ആരാധനാലയങ്ങൾ' }, blurb: { en: 'Temples, churches, mosques', ml: 'ക്ഷേത്രങ്ങൾ, പള്ളികൾ, മസ്ജിദുകൾ' } },
  { no: '07', path: '/education', label: { en: 'Education', ml: 'വിദ്യാഭ്യാസം' }, blurb: { en: 'Schools and institutions', ml: 'സ്കൂളുകളും സ്ഥാപനങ്ങളും' } },
  { no: '08', path: '/tourism', label: { en: 'Tourism', ml: 'വിനോദസഞ്ചാരം' }, blurb: { en: 'Places worth visiting', ml: 'കാണേണ്ട സ്ഥലങ്ങൾ' } },
  { no: '09', path: '/old-and-new', label: { en: 'Old vs New', ml: 'അന്നും ഇന്നും' }, blurb: { en: 'Then and now', ml: 'പഴയതും പുതിയതും' } },
  { no: '10', path: '/people-development', label: { en: 'People & Development', ml: 'ജനങ്ങളും വികസനവും' }, blurb: { en: 'Community, transport, services', ml: 'സമൂഹം, ഗതാഗതം, സേവനങ്ങൾ' } },
  { no: '11', path: '/gallery', label: { en: 'Image Gallery', ml: 'ചിത്രശാല' }, blurb: { en: 'Old and present-day photos', ml: 'പഴയതും പുതിയതുമായ ചിത്രങ്ങൾ' } },
  { no: '12', path: '/news', label: { en: 'News', ml: 'വാർത്തകൾ' }, blurb: { en: 'Local updates', ml: 'പ്രാദേശിക വിവരങ്ങൾ' } },
  { no: '13', path: '/directory', label: { en: 'Directory', ml: 'ഡയറക്ടറി' }, blurb: { en: 'Useful services and contacts', ml: 'ഉപകാരപ്രദമായ സേവനങ്ങൾ' } },
  { no: '14', path: '/about', label: { en: 'About', ml: 'ഞങ്ങളെക്കുറിച്ച്' }, blurb: { en: 'The project and sources', ml: 'പദ്ധതിയും സ്രോതസ്സുകളും' } },
];

export type Fact = { label: L; value: L; status: Status };

/** Quick facts. Values marked 'directory' / 'to-verify' still need official confirmation. */
export const FACTS: Fact[] = [
  { label: { en: 'Place', ml: 'സ്ഥലം' }, value: { en: 'Edakkom (എടക്കോം), also written Idakkom (ഇടക്കോം) / Edakom', ml: 'എടക്കോം (ഇടക്കോം / Edakkom / Edakom)' }, status: 'verified' },
  { label: { en: 'Type', ml: 'തരം' }, value: { en: 'Town and panchayat ward', ml: 'പട്ടണവും പഞ്ചായത്ത് വാർഡും' }, status: 'directory' },
  { label: { en: 'District', ml: 'ജില്ല' }, value: { en: 'Kannur, Kerala, India', ml: 'കണ്ണൂർ, കേരളം, ഇന്ത്യ' }, status: 'verified' },
  { label: { en: 'Taluk & block', ml: 'താലൂക്ക്, ബ്ലോക്ക്' }, value: { en: 'Taliparamba', ml: 'തളിപ്പറമ്പ്' }, status: 'directory' },
  {
    label: { en: 'Local body', ml: 'തദ്ദേശ സ്ഥാപനം' },
    value: {
      en: 'Chapparappadava Grama Panchayat — Edakkom ward (ward 19 from the 2025 election; ward 17 before). The wider Edakkom area reaches into Eramam-Kuttoor panchayat.',
      ml: 'ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത് — എടക്കോം വാർഡ് (2025 തിരഞ്ഞെടുപ്പ് മുതൽ വാർഡ് 19; മുമ്പ് വാർഡ് 17). എടക്കോം പ്രദേശം എരമം-കുറ്റൂർ പഞ്ചായത്തിലേക്കും നീളുന്നു.',
    },
    status: 'directory',
  },
  { label: { en: 'Assembly / Lok Sabha', ml: 'നിയമസഭ / ലോക്സഭ' }, value: { en: 'Taliparamba / Kannur', ml: 'തളിപ്പറമ്പ് / കണ്ണൂർ' }, status: 'directory' },
  { label: { en: 'PIN code', ml: 'പിൻ കോഡ്' }, value: { en: '670581', ml: '670581' }, status: 'verified' },
  {
    label: { en: 'Post office', ml: 'പോസ്റ്റ് ഓഫീസ്' },
    value: { en: 'Edakkom Branch Office — under Chepparapadava Sub Office, Taliparamba Head Office', ml: 'എടക്കോം ബ്രാഞ്ച് ഓഫീസ് — ചപ്പാരപ്പടവ് സബ് ഓഫീസ്, തളിപ്പറമ്പ് ഹെഡ് ഓഫീസ്' },
    status: 'directory',
  },
  {
    label: { en: 'Main road', ml: 'പ്രധാന റോഡ്' },
    value: { en: 'Methuramba – Chapparappadava – Kuttoor Road', ml: 'മേത്തുരമ്പ – ചപ്പാരപ്പടവ് – കുറ്റൂർ റോഡ്' },
    status: 'directory',
  },
  { label: { en: 'Coordinates', ml: 'അക്ഷാംശം, രേഖാംശം' }, value: { en: '≈ 12.146° N, 75.402° E', ml: '≈ 12.146° വ, 75.402° കി' }, status: 'directory' },
  { label: { en: 'Nearest towns', ml: 'അടുത്ത പട്ടണങ്ങൾ' }, value: { en: 'Chapparappadava (≈ 2–3.5 km) · Taliparamba (≈ 14 km)', ml: 'ചപ്പാരപ്പടവ് (≈ 2–3.5 കി.മീ.) · തളിപ്പറമ്പ് (≈ 14 കി.മീ.)' }, status: 'directory' },
  { label: { en: 'From Kannur town', ml: 'കണ്ണൂർ നഗരത്തിൽ നിന്ന്' }, value: { en: 'About 35 km north', ml: 'ഏകദേശം 35 കി.മീ. വടക്ക്' }, status: 'directory' },
  { label: { en: 'Nearest railway station', ml: 'അടുത്ത റെയിൽവേ സ്റ്റേഷൻ' }, value: { en: 'Payyanur (about 17 km)', ml: 'പയ്യന്നൂർ (ഏകദേശം 17 കി.മീ.)' }, status: 'directory' },
  { label: { en: 'Airport', ml: 'വിമാനത്താവളം' }, value: { en: 'Kannur International Airport', ml: 'കണ്ണൂർ അന്താരാഷ്ട്ര വിമാനത്താവളം' }, status: 'verified' },
  { label: { en: 'Phone code (STD)', ml: 'എസ്.ടി.ഡി. കോഡ്' }, value: { en: '0460 (Taliparamba)', ml: '0460 (തളിപ്പറമ്പ്)' }, status: 'directory' },
  { label: { en: 'Language', ml: 'ഭാഷ' }, value: { en: 'Malayalam', ml: 'മലയാളം' }, status: 'verified' },
];

export const SOURCES: { title: string; url: string; note: L }[] = [
  {
    title: 'Malayalam Wikipedia — ഇടക്കോം (Idakkom / Edakkom)',
    url: 'https://ml.wikipedia.org/wiki/%E0%B4%87%E0%B4%9F%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8B%E0%B4%82',
    note: { en: 'Location, taluk and the two panchayats Edakkom spans', ml: 'സ്ഥാനം, താലൂക്ക്, എടക്കോം ഉൾപ്പെടുന്ന പഞ്ചായത്തുകൾ' },
  },
  {
    title: 'Malayalam Wikipedia — ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത്',
    url: 'https://ml.wikipedia.org/wiki/%E0%B4%9A%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BE%E0%B4%B0%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%9F%E0%B4%B5%E0%B5%8D_%E0%B4%97%E0%B5%8D%E0%B4%B0%E0%B4%BE%E0%B4%AE%E0%B4%AA%E0%B4%9E%E0%B5%8D%E0%B4%9A%E0%B4%BE%E0%B4%AF%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%8D',
    note: { en: 'Wards (Edakkom ward), panchayat history, hills, rivers, churches, freedom fighters, 2025 results', ml: 'വാർഡുകൾ, പഞ്ചായത്ത് ചരിത്രം, കുന്നുകൾ, പുഴകൾ, പള്ളികൾ, സ്വാതന്ത്ര്യസമര സേനാനികൾ' },
  },
  {
    title: 'KSFE — Edakom branch (402)',
    url: 'https://ksfe.com/location/edakom-402',
    note: { en: 'Branch address in Edakkom town', ml: 'എടക്കോം ടൗണിലെ ശാഖാ വിലാസം' },
  },
  {
    title: 'Google Maps — places in and around Edakkom',
    url: 'https://www.google.com/maps/place/Edakkom,+Kerala+670581',
    note: { en: 'Churches, temples, mosques, schools, clinics, banks, libraries and shops', ml: 'പള്ളികൾ, ക്ഷേത്രങ്ങൾ, മസ്ജിദുകൾ, സ്കൂളുകൾ, ആശുപത്രികൾ, ബാങ്കുകൾ, വായനശാലകൾ, കടകൾ' },
  },
  {
    title: 'Malayala Manorama — Chapparappadava news (May 2022)',
    url: 'https://www.manoramaonline.com/district-news/kannur/2022/05/01/kannur-soil-smuggling.html',
    note: { en: 'Hill-cutting concerns at Edakkom and nearby areas', ml: 'എടക്കോമിലും സമീപ പ്രദേശങ്ങളിലും കുന്നിടിക്കൽ' },
  },
  {
    title: 'onefivenine — Edakkom village page',
    url: 'https://www.onefivenine.com/india/villages/Kannur/Payyannur/Edakkom',
    note: { en: 'Distances, nearby schools, temples, health centres, ATMs', ml: 'ദൂരങ്ങൾ, സ്കൂളുകൾ, ക്ഷേത്രങ്ങൾ, ആരോഗ്യകേന്ദ്രങ്ങൾ, എ.ടി.എം.' },
  },
  {
    title: 'onefivenine — PIN 670581',
    url: 'http://www.onefivenine.com/india/pincode/670581',
    note: { en: 'Post offices and villages under PIN 670581', ml: '670581 പിൻ കോഡിലെ പോസ്റ്റ് ഓഫീസുകളും ഗ്രാമങ്ങളും' },
  },
  {
    title: 'Wikipedia — Chapparapadavu',
    url: 'https://en.wikipedia.org/wiki/Chapparapadavu',
    note: { en: 'Panchayat area, villages and 2011 census figures', ml: 'പഞ്ചായത്ത് വിസ്തീർണം, ഗ്രാമങ്ങൾ, 2011 സെൻസസ്' },
  },
  {
    title: 'Wikipedia — Panapuzha',
    url: 'https://en.wikipedia.org/wiki/Panapuzha',
    note: { en: '2011 census figures for Panapuzha village', ml: 'പാണപ്പുഴ ഗ്രാമത്തിന്റെ 2011 സെൻസസ് കണക്കുകൾ' },
  },
  {
    title: 'UCA News — Archdiocese of Tellicherry directory',
    url: 'https://dev.ucanews.com/directory/amp/social-welfare/india-tellicherry/147',
    note: { en: 'Infant Jesus parish, Edakkom and Bishop Valloppilly Memorial Orphanage', ml: 'ഉണ്ണീശോ ഇടവക, എടക്കോം; ബിഷപ്പ് വള്ളോപ്പിള്ളി മെമ്മോറിയൽ അനാഥാലയം' },
  },
  {
    title: 'Kerala Tourism',
    url: 'https://www.keralatourism.org/',
    note: { en: 'Kannur destinations', ml: 'കണ്ണൂരിലെ വിനോദസഞ്ചാര കേന്ദ്രങ്ങൾ' },
  },
  {
    title: 'Sametham — Kerala School Data Bank (KITE)',
    url: 'https://sametham.kite.kerala.gov.in/',
    note: { en: 'Official data for verifying schools', ml: 'സ്കൂൾ വിവരങ്ങൾ സ്ഥിരീകരിക്കാനുള്ള ഔദ്യോഗിക ഡാറ്റ' },
  },
  {
    title: 'Census of India — Kannur District Census Handbook',
    url: 'https://censusindia.gov.in/',
    note: { en: 'Population and village-level data', ml: 'ജനസംഖ്യയും ഗ്രാമതല വിവരങ്ങളും' },
  },
];

/** Contact details for the project — fill these in before going live. */
export const CONTACT = {
  email: '', // e.g. hello@edakkom.com
  whatsapp: '', // e.g. 919xxxxxxxxx (country code, no +)
};
