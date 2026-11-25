import type { L } from '../lib/i18n';
import type { Status } from './site';

export type Category = 'historical' | 'village' | 'education' | 'religious' | 'festivals' | 'people' | 'development' | 'nature';

export const CATEGORIES: { id: Category; label: L }[] = [
  { id: 'historical', label: { en: 'Historical', ml: 'ചരിത്രം' } },
  { id: 'village', label: { en: 'Village', ml: 'ഗ്രാമം' } },
  { id: 'education', label: { en: 'Education', ml: 'വിദ്യാഭ്യാസം' } },
  { id: 'religious', label: { en: 'Religious', ml: 'ആരാധന' } },
  { id: 'festivals', label: { en: 'Festivals', ml: 'ഉത്സവങ്ങൾ' } },
  { id: 'people', label: { en: 'People', ml: 'ജനങ്ങൾ' } },
  { id: 'development', label: { en: 'Development', ml: 'വികസനം' } },
  { id: 'nature', label: { en: 'Nature', ml: 'പ്രകൃതി' } },
];

export type Photo = {
  id: string;
  src: string; // slug in public/images, or a full URL for uploaded photos
  title: L;
  caption?: L;
  category: Category;
  era: 'old' | 'new';
  year?: string;
  status: Status;
  credit?: string;
};

/**
 * Photos marked 'reference' are representative pictures of Kerala / North Malabar
 * and are labelled that way on the site. When a photo is confirmed as Edakkom,
 * change its status to 'verified' and add the year, place and photographer.
 */
export const PHOTOS: Photo[] = [
  // ——— Present day ———
  {
    id: 'edakkom-aerial', src: 'edakkom-aerial', category: 'religious', era: 'new', status: 'to-verify',
    title: { en: 'The hilltop church from above', ml: 'ആകാശത്തു നിന്ന് കുന്നിൻമുകളിലെ പള്ളി' },
    caption: {
      en: 'A drone view of the twin-towered church on the hill, its winding road and the green hills beyond — church name to be confirmed.',
      ml: 'കുന്നിൻമുകളിലെ ഇരട്ടഗോപുര പള്ളിയും വളഞ്ഞുപുളഞ്ഞ റോഡും പിന്നിലെ പച്ചക്കുന്നുകളും — ഡ്രോൺ ദൃശ്യം. പള്ളിയുടെ പേര് സ്ഥിരീകരിക്കണം.',
    },
  },
  {
    id: 'theyyam-night-fire', src: 'theyyam-night-fire', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'Theyyam by firelight', ml: 'തീവെളിച്ചത്തിലെ തെയ്യം' },
    caption: { en: 'A night Theyyam with blazing torches — the living heart of North Malabar ritual art.', ml: 'ആളിക്കത്തുന്ന പന്തങ്ങൾക്കിടയിൽ രാത്രിയിലെ തെയ്യം — ഉത്തര മലബാറിന്റെ അനുഷ്ഠാനകലയുടെ ജീവൻ.' },
  },
  {
    id: 'theyyam-shrine-day', src: 'theyyam-shrine-day', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'Theyyam before the shrine', ml: 'കാവിനു മുന്നിൽ തെയ്യം' },
    caption: { en: 'The Theyyam dances in the courtyard of the kavu while elders look on.', ml: 'മുതിർന്നവർ നോക്കിനിൽക്കെ കാവുമുറ്റത്ത് തെയ്യം ആടുന്നു.' },
  },
  {
    id: 'theyyam-fire-sparks', src: 'theyyam-fire-sparks', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'Sparks and drums', ml: 'തീപ്പൊരിയും ചെണ്ടയും' },
    caption: { en: 'Embers fly as the Theyyam whirls through the night.', ml: 'രാവിലൂടെ തെയ്യം ചുഴലുമ്പോൾ തീപ്പൊരികൾ പാറുന്നു.' },
  },
  {
    id: 'theyyam-pair-chenda', src: 'theyyam-pair-chenda', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'Two Theyyams and the chenda', ml: 'രണ്ടു തെയ്യങ്ങളും ചെണ്ടമേളവും' },
    caption: { en: 'Drummers keep the rhythm as crowds gather around the performers.', ml: 'ചുറ്റും ജനം കൂടുമ്പോൾ ചെണ്ടക്കാർ താളം പിടിക്കുന്നു.' },
  },
  {
    id: 'theyyam-red-crowd', src: 'theyyam-red-crowd', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'Theyyam among the people', ml: 'ജനങ്ങൾക്കിടയിൽ തെയ്യം' },
    caption: { en: 'Children and elders stand close — Theyyam is a deity that walks among its people.', ml: 'കുട്ടികളും മുതിർന്നവരും അടുത്തുനിൽക്കുന്നു — ജനങ്ങൾക്കിടയിലൂടെ നടക്കുന്ന ദൈവമാണ് തെയ്യം.' },
  },
  {
    id: 'karkidaka-theyyam-paddy', src: 'karkidaka-theyyam-paddy', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'Karkidaka Theyyam through the paddy', ml: 'വയലിലൂടെ കർക്കിടക തെയ്യം' },
    caption: { en: 'In the monsoon month of Karkidakam, child performers visit homes to drive away hardship.', ml: 'കർക്കിടക മാസത്തിൽ ദുരിതമകറ്റാൻ കുട്ടിത്തെയ്യങ്ങൾ വീടുകൾ തോറും എത്തുന്നു.' },
  },
  {
    id: 'temple-festival-umbrellas', src: 'temple-festival-umbrellas', category: 'religious', era: 'new', status: 'reference',
    title: { en: 'Temple festival under the banyan', ml: 'ആൽമരച്ചുവട്ടിലെ ഉത്സവം' },
    caption: { en: 'Ceremonial umbrellas and drums at a temple festival.', ml: 'മുത്തുക്കുടകളും വാദ്യങ്ങളുമായി ക്ഷേത്രോത്സവം.' },
  },
  {
    id: 'church-facade-statue', src: 'church-facade-statue', category: 'religious', era: 'new', status: 'to-verify',
    title: { en: 'Parish church (name to be confirmed)', ml: 'ഇടവക ദേവാലയം (പേര് സ്ഥിരീകരിക്കണം)' },
    caption: { en: 'A church in the Edakkom area — please help us confirm which parish this is.', ml: 'എടക്കോം പ്രദേശത്തെ ഒരു ദേവാലയം — ഏത് ഇടവകയെന്ന് സ്ഥിരീകരിക്കാൻ സഹായിക്കൂ.' },
  },
  {
    id: 'church-white-domes', src: 'church-white-domes', category: 'religious', era: 'new', status: 'to-verify',
    title: { en: 'Church with red domes (name to be confirmed)', ml: 'ചുവന്ന താഴികക്കുടങ്ങളുള്ള പള്ളി (പേര് സ്ഥിരീകരിക്കണം)' },
    caption: { en: 'A newly built church — location and name to be confirmed.', ml: 'പുതുതായി പണിത ഒരു പള്ളി — സ്ഥലവും പേരും സ്ഥിരീകരിക്കണം.' },
  },
  {
    id: 'onam-pookalam-group', src: 'onam-pookalam-group', category: 'people', era: 'new', status: 'reference',
    title: { en: 'Onam pookkalam with friends', ml: 'കൂട്ടുകാരോടൊപ്പം ഓണപ്പൂക്കളം' },
    caption: { en: 'Students gather around a flower carpet made for Onam.', ml: 'ഓണത്തിനൊരുക്കിയ പൂക്കളത്തിന് ചുറ്റും വിദ്യാർത്ഥികൾ.' },
  },
  {
    id: 'onam-pookalam-hall', src: 'onam-pookalam-hall', category: 'people', era: 'new', status: 'reference',
    title: { en: 'Onam at the institute', ml: 'സ്ഥാപനത്തിലെ ഓണാഘോഷം' },
    caption: { en: 'Traditional kasavu and mundu for the Onam celebration.', ml: 'കസവും മുണ്ടുമണിഞ്ഞ് ഓണാഘോഷം.' },
  },
  {
    id: 'floating-pookalam', src: 'floating-pookalam', category: 'festivals', era: 'new', status: 'reference',
    title: { en: 'A pookkalam on the water', ml: 'വെള്ളത്തിൽ ഒഴുകുന്ന പൂക്കളം' },
    caption: { en: 'A floating flower carpet on a temple pond.', ml: 'ക്ഷേത്രക്കുളത്തിൽ ഒഴുകുന്ന പൂക്കളം.' },
  },
  {
    id: 'marigold-farming', src: 'marigold-farming', category: 'development', era: 'new', status: 'reference',
    title: { en: 'Marigold harvest', ml: 'ചെണ്ടുമല്ലി വിളവെടുപ്പ്' },
    caption: { en: 'Community flower farming for the Onam season — a common local-body initiative in Kerala.', ml: 'ഓണക്കാലത്തേക്കുള്ള കൂട്ടായ പൂകൃഷി — കേരളത്തിലെ തദ്ദേശ സ്ഥാപനങ്ങളുടെ പതിവ് പദ്ധതി.' },
  },
  {
    id: 'village-bridge-road', src: 'village-bridge-road', category: 'development', era: 'new', status: 'to-verify',
    title: { en: 'The bridge road', ml: 'പാലം കടന്നുള്ള റോഡ്' },
    caption: { en: 'A tarred road and bridge through green countryside — location to be confirmed.', ml: 'പച്ചപ്പിനിടയിലൂടെ ടാർ റോഡും പാലവും — സ്ഥലം സ്ഥിരീകരിക്കണം.' },
  },
  {
    id: 'health-centre', src: 'health-centre', category: 'development', era: 'new', status: 'to-verify',
    title: { en: 'Health centre', ml: 'ആരോഗ്യ കേന്ദ്രം' },
    caption: { en: 'A local health centre with ambulance — name to be confirmed.', ml: 'ആംബുലൻസ് സൗകര്യമുള്ള ആരോഗ്യ കേന്ദ്രം — പേര് സ്ഥിരീകരിക്കണം.' },
  },
  {
    id: 'nature-forest-stream', src: 'nature-forest-stream', category: 'nature', era: 'new', status: 'to-verify',
    title: { en: 'Stream under the trees', ml: 'മരത്തണലിലെ പുഴ' },
    caption: { en: 'Rocks, shade and a quiet stream — location to be confirmed.', ml: 'പാറകളും തണലും ശാന്തമായ പുഴയും — സ്ഥലം സ്ഥിരീകരിക്കണം.' },
  },

  // ——— Old Malabar / Kerala archive ———
  {
    id: 'old-paddy-field-hut', src: 'old-paddy-field-hut', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'Path through the paddy', ml: 'വയൽവരമ്പിലൂടെ' },
    caption: { en: 'A footpath through ripe paddy, a thatched hut and coconut palms — the old Kerala countryside.', ml: 'വിളഞ്ഞ നെൽവയലിലൂടെ ഒറ്റയടിപ്പാത, ഓലപ്പുര, തെങ്ങുകൾ — പഴയ കേരള ഗ്രാമം.' },
  },
  {
    id: 'old-ploughing-umbrella', src: 'old-ploughing-umbrella', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'Ploughing with oxen', ml: 'കാളപൂട്ട്' },
    caption: { en: 'Farmers prepare the wet field with ox teams while the landowner watches under an umbrella.', ml: 'കാളകളെ പൂട്ടി കർഷകർ വയലൊരുക്കുന്നു; കുടചൂടി ജന്മി നോക്കിനിൽക്കുന്നു.' },
  },
  {
    id: 'old-oxen-ploughing', src: 'old-oxen-ploughing', category: 'historical', era: 'old', status: 'reference', year: 'c. mid 1900s',
    title: { en: 'Oxen in the wet field', ml: 'ചേറ്റുവയലിൽ കാളകൾ' },
    caption: { en: 'Ploughing teams under tall coconut and palmyra palms (South India).', ml: 'ഉയരമുള്ള തെങ്ങുകൾക്കും കരിമ്പനകൾക്കും താഴെ നിലമുഴുന്നു (ദക്ഷിണേന്ത്യ).' },
  },
  {
    id: 'old-women-farmers', src: 'old-women-farmers', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'Women at work in the fields', ml: 'വയലിൽ പണിയെടുക്കുന്ന സ്ത്രീകൾ' },
    caption: { en: 'Women breaking clods after ploughing — farm work that fed every village.', ml: 'ഉഴുതശേഷം കട്ട ഉടയ്ക്കുന്ന സ്ത്രീകൾ — ഓരോ ഗ്രാമത്തെയും ഊട്ടിയ അധ്വാനം.' },
  },
  {
    id: 'old-winnowing', src: 'old-winnowing', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'Winnowing the harvest', ml: 'നെല്ല് പാറ്റുന്നു' },
    caption: { en: 'Grain is lifted high and poured so the wind carries away the chaff.', ml: 'പതിര് കാറ്റിൽ പറക്കാൻ നെല്ല് ഉയർത്തി ചൊരിയുന്നു.' },
  },
  {
    id: 'old-water-wheel', src: 'old-water-wheel', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'Irrigating the paddy — the water wheel', ml: 'ചക്രം ചവിട്ടി വെള്ളം തേവുന്നു' },
    caption: { en: 'Men tread a wooden wheel (chakram) to lift water into the fields.', ml: 'മരച്ചക്രം ചവിട്ടി വയലിലേക്ക് വെള്ളം കയറ്റുന്നു.' },
  },
  {
    id: 'old-thatched-house', src: 'old-thatched-house', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'A thatched home', ml: 'ഓലമേഞ്ഞ വീട്' },
    caption: { en: 'Palm-leaf thatch, mud walls and a bamboo fence under coconut palms.', ml: 'തെങ്ങിൻതോപ്പിൽ ഓലമേഞ്ഞ മൺവീടും മുളവേലിയും.' },
  },
  {
    id: 'old-tiled-house', src: 'old-tiled-house', category: 'historical', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'Tiled house in the coconut grove', ml: 'തെങ്ങിൻതോപ്പിലെ ഓടിട്ട വീട്' },
    caption: { en: 'A tiled-roof house with a long veranda.', ml: 'നീണ്ട വരാന്തയുള്ള ഓടിട്ട വീട്.' },
  },
  {
    id: 'old-bungalow', src: 'old-bungalow', category: 'historical', era: 'old', status: 'reference', year: 'c. late 1800s',
    title: { en: 'Colonial-era bungalow', ml: 'കൊളോണിയൽ കാലത്തെ ബംഗ്ലാവ്' },
    caption: { en: 'A large building of the British period, with smaller thatched houses behind.', ml: 'ബ്രിട്ടീഷ് കാലത്തെ വലിയ കെട്ടിടവും പിന്നിൽ ഓലപ്പുരകളും.' },
  },
  {
    id: 'old-thatched-school', src: 'old-thatched-school', category: 'historical', era: 'old', status: 'reference', year: 'c. late 1800s',
    title: { en: 'Gathering at the thatched hall', ml: 'ഓലപ്പുരയ്ക്കു മുന്നിൽ' },
    caption: { en: 'Children and teachers outside a large thatched building.', ml: 'വലിയ ഓലപ്പുരയ്ക്കു മുന്നിൽ കുട്ടികളും അധ്യാപകരും.' },
  },
  {
    id: 'old-village-road', src: 'old-village-road', category: 'historical', era: 'old', status: 'reference', year: 'c. 1920s',
    title: { en: 'The old road', ml: 'പഴയ നാട്ടുവഴി' },
    caption: { en: 'An unpaved road lined with palms and laterite walls.', ml: 'തെങ്ങുകളും ചെങ്കൽ മതിലുകളും അതിരിടുന്ന ടാറിടാത്ത വഴി.' },
  },
  {
    id: 'old-road-roller', src: 'old-road-roller', category: 'historical', era: 'old', status: 'reference', year: 'c. 1920s',
    title: { en: 'Building the road by hand', ml: 'കൈകൊണ്ട് റോഡ് പണിയുന്നു' },
    caption: { en: 'Workers pull a stone roller to level a new road.', ml: 'പുതിയ റോഡ് നിരപ്പാക്കാൻ തൊഴിലാളികൾ കല്ലുരുളൻ വലിക്കുന്നു.' },
  },
  {
    id: 'old-riverside', src: 'old-riverside', category: 'historical', era: 'old', status: 'reference', year: 'c. late 1800s',
    title: { en: 'At the water’s edge', ml: 'പുഴക്കരയിൽ' },
    caption: { en: 'People draw water at a palm-fringed river bank.', ml: 'തെങ്ങുകൾ അതിരിടുന്ന പുഴക്കരയിൽ വെള്ളമെടുക്കുന്നവർ.' },
  },
  {
    id: 'old-temple-mandapams', src: 'old-temple-mandapams', category: 'historical', era: 'old', status: 'reference', year: 'c. late 1800s',
    title: { en: 'Temple pavilions under the mango tree', ml: 'മാവിൻചുവട്ടിലെ ക്ഷേത്ര മണ്ഡപങ്ങൾ' },
    caption: { en: 'Old tiled-roof pavilions of a village shrine.', ml: 'ഗ്രാമക്ഷേത്രത്തിലെ ഓടിട്ട പഴയ മണ്ഡപങ്ങൾ.' },
  },
  {
    id: 'old-theyyam-umbrellas', src: 'old-theyyam-umbrellas', category: 'historical', era: 'old', status: 'reference', year: 'c. 1930s',
    title: { en: 'Theyyam, a century ago', ml: 'ഒരു നൂറ്റാണ്ട് മുമ്പത്തെ തെയ്യം' },
    caption: { en: 'A Theyyam under ceremonial umbrellas, surrounded by villagers.', ml: 'മുത്തുക്കുടകൾക്കു കീഴിൽ നാട്ടുകാർക്ക് നടുവിൽ തെയ്യം.' },
  },
  {
    id: 'old-classroom-malayalam', src: 'old-classroom-malayalam', category: 'education', era: 'old', status: 'reference', year: 'c. 1930s',
    title: { en: 'Learning the Malayalam letters', ml: 'മലയാള അക്ഷരം പഠിക്കുന്നു' },
    caption: { en: 'A teacher points to letters on the blackboard; children sit on mats with letters before them.', ml: 'ബോർഡിലെ അക്ഷരങ്ങൾ ടീച്ചർ ചൂണ്ടുന്നു; പായയിലിരുന്ന് കുട്ടികൾ പഠിക്കുന്നു.' },
  },
  {
    id: 'old-school-assembly', src: 'old-school-assembly', category: 'education', era: 'old', status: 'reference', year: 'c. 1930s',
    title: { en: 'School assembly', ml: 'സ്കൂൾ അസംബ്ലി' },
    caption: { en: 'Pupils line up in front of a tiled school building.', ml: 'ഓടിട്ട സ്കൂൾ കെട്ടിടത്തിനു മുന്നിൽ വരിനിൽക്കുന്ന കുട്ടികൾ.' },
  },
  {
    id: 'old-school-gymnastics', src: 'old-school-gymnastics', category: 'education', era: 'old', status: 'reference', year: 'c. 1930s',
    title: { en: 'Drill on the parallel bars', ml: 'സമാന്തര ബാറിലെ ഡ്രിൽ' },
    caption: { en: 'Physical training at school, watched by classmates.', ml: 'സഹപാഠികൾ നോക്കിനിൽക്കെ സ്കൂളിലെ കായിക പരിശീലനം.' },
  },
  {
    id: 'old-vellur-vayanasala', src: 'old-vellur-vayanasala', category: 'people', era: 'old', status: 'reference', year: 'c. 1970s',
    title: { en: 'A village reading room — Vellur Pothujana Vayanasala', ml: 'വെള്ളൂർ പൊതുജന വായനശാല' },
    caption: {
      en: 'Members of a public library near Payyanur. Reading rooms like this were the heart of North Malabar village life.',
      ml: 'പയ്യന്നൂരിനടുത്തുള്ള ഒരു പൊതുജന വായനശാലയിലെ അംഗങ്ങൾ. ഇത്തരം വായനശാലകളായിരുന്നു ഉത്തര മലബാർ ഗ്രാമജീവിതത്തിന്റെ ഹൃദയം.',
    },
  },
  {
    id: 'old-family-portrait', src: 'old-family-portrait', category: 'people', era: 'old', status: 'reference', year: 'c. early 1900s',
    title: { en: 'A family portrait', ml: 'ഒരു കുടുംബചിത്രം' },
    caption: { en: 'A Kerala family in traditional dress and jewellery.', ml: 'പരമ്പരാഗത വേഷവും ആഭരണങ്ങളുമണിഞ്ഞ ഒരു കേരളീയ കുടുംബം.' },
  },
];

export const photoById = (id: string) => PHOTOS.find((p) => p.id === id);
